import { createSelector } from 'reselect'

import difference from 'lodash/difference'
import isEmpty from 'lodash/isEmpty'
import keys from 'lodash/keys'
import nthArg from 'lodash/nthArg'

import { denormalize } from 'utils/redux'

import { getData } from './data'

const getState = state => state.dictionaries

const getLoadedList = createSelector(
  getState,
  keys,
)

export const getUnloadedList = createSelector(
  getLoadedList,
  nthArg(1),
  (loadedList, requestedList) => difference(requestedList, loadedList),
)

export const getDictionary = dictionaryType =>
  createSelector(
    getState,
    getData,
    (dictionaries, data) =>
      isEmpty(dictionaries[dictionaryType])
        ? []
        : denormalize(
            data,
            dictionaries[dictionaryType][0].type,
            dictionaries[dictionaryType],
          ),
  )
