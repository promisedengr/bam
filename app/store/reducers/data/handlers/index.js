import mergeWith from 'lodash/mergeWith'
import reduce from 'lodash/reduce'
import set from 'lodash/set'

import {
  complexMerger,
  latestArrayMerger,
  latestNullMerger,
} from 'utils/mergers'

import waitingRooms from './waitingRooms'

const REDUCERS = {
  waitingRooms,
}

export default (state, action) =>
  mergeWith(
    {},
    state,
    reduce(
      REDUCERS,
      (acc, reducer, key) => set(acc, key, reducer(state[key], action)),
      {},
    ),
    complexMerger([latestArrayMerger, latestNullMerger]),
  )
