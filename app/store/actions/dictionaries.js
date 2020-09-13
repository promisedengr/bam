import { createActions } from 'reduxsauce'

export const {
  Types: DictionariesTypes,
  Creators: DictionariesCreators,
} = createActions(
  {
    loadDictionariesRequest: ['dictionaryList'],
    loadDictionariesSuccess: ['dictionaries', 'entities'],
    loadDictionariesFailure: null,
  },
  { prefix: 'Dictionaries/' },
)
