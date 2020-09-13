import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

import reduxPersistConfig from 'config/reduxPersist'

import app from './app'
import data from './data'
import dictionaries from './dictionaries'
import locale from './locale'
import session from './session'
import theme from './theme'
import viewer from './viewer'

export default combineReducers({
  data: persistReducer(reduxPersistConfig.dataConfig, data),

  app,
  dictionaries,
  locale,
  session,
  theme,
  viewer,
})
