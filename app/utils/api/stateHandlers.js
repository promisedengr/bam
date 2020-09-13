import compact from 'lodash/compact'
import forEach from 'lodash/forEach'
import get from 'lodash/get'
import merge from 'lodash/merge'
import mergeWith from 'lodash/mergeWith'
import reduce from 'lodash/reduce'
import reject from 'lodash/reject'
import union from 'lodash/union'
import values from 'lodash/values'

import { latestArrayMerger } from 'utils/mergers'

const getData = action => get(action, 'response.data', null)
const getRelationKey = (action, relationType) => relationType

const OPTIONS = {
  relationAdd: {
    getData,
    getRelationKey,
    mergeRelations: (currentRelations, incomingRelation) => [
      ...currentRelations,
      incomingRelation,
    ],
    singular: false,
  },
  relationDelete: {
    getData,
    getRelationKey,
    singular: false,
    getResourceId: action => get(action, 'payload.resourceId', null),
    getRelationId: action => get(action, 'payload.relationId', null),
  },
}

const getRelationId = (subject, relationKey) =>
  get(subject, `relationships.${relationKey}.data.id`)

const getRelations = (subject, relationKey) =>
  get(subject, `relationships.${relationKey}.data`) || []

const createRelationIdsReducer = relationKey => (acc, item) =>
  union(acc, compact([getRelationId(item, relationKey)]))

export const createRelationAddHandler = (
  relationType,
  resourceKey,
  options,
) => (state, action) => {
  const opts = merge({}, OPTIONS.relationAdd, options)
  const relationData = get(opts.getData(action), relationType)

  if (!relationData) return state

  const incomings = values(relationData)
  const updateablesMap = new Map()

  forEach(
    reduce(incomings, createRelationIdsReducer(resourceKey), []),
    relationId => updateablesMap.set(relationId, state[relationId]),
  )

  forEach(incomings, incoming => {
    const updateableId = getRelationId(incoming, resourceKey)
    const updateable = updateablesMap.get(updateableId)

    if (!updateable) return

    const incomingRelation = { type: relationType, id: incoming.id }
    const currentRelations = getRelations(updateable, relationType)

    const relationKey =
      opts.getRelationKey(action, relationType) || relationType

    const updated = {
      ...updateable,
      relationships: {
        // Relationships spread omitted since lodash.merge preserves other rel types.
        [relationKey]: {
          data: opts.singular
            ? incomingRelation
            : opts.mergeRelations(currentRelations, incomingRelation),
        },
      },
    }

    // Override prev value with prev+new
    updateablesMap.set(updateableId, updated)
  })

  // Convert Map<RelationId, RelationValue> to Array<Relation>
  const updatedList = []
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of updateablesMap.entries()) {
    if (key && value) {
      updatedList.push({ [key]: value })
    }
  }

  return merge({}, state, ...updatedList)
}

export const createRelationDeleteHandler = (relationType, options) => (
  state,
  action,
) => {
  const opts = merge({}, OPTIONS.relationDelete, options)
  const resourceId = opts.getResourceId(action)
  const relationId = opts.getRelationId(action)

  if (!resourceId || !relationId) return state

  const { singular } = opts
  const relationKey = opts.getRelationKey(action, relationType) || relationType

  const data = singular
    ? null
    : reject(
        get(state, `${resourceId}.relationships.${relationKey}.data`, []),
        { id: relationId },
      )

  return mergeWith(
    {},
    state,
    {
      [resourceId]: {
        relationships: {
          [relationKey]: {
            data,
          },
        },
      },
    },
    latestArrayMerger,
  )
}
