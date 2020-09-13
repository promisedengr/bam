import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import debugConfig from 'config/debug'
import reduxPersistConfig from 'config/reduxPersist'

import RehydrationService from 'services/rehydration'

export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const enhancers = []
  const middleware = []

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware({
    sagaMonitor: debugConfig.useReactotron
      ? console.tron.createSagaMonitor() // eslint-disable-line
      : null,
  })

  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  if (debugConfig.useReactotron) {
    enhancers.push(console.tron.createEnhancer()) // eslint-disable-line
  }

  const store = createStore(rootReducer, compose(...enhancers))

  // NOTE: Configure persistStore and check reducer version number
  if (reduxPersistConfig.active) {
    RehydrationService.updateReducers(store)
  }

  // NOTE: Kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga, store)

  return {
    store,
    sagasManager,
    sagaMiddleware,
  }
}
