import { all, put, call, fork, race, take, select } from 'redux-saga/effects'

import { NavigationActions } from 'react-navigation'

import NavigationService from 'services/navigation'

import { app } from 'constants/routeNames'

import { AppCreators, AppTypes } from 'store/actions/app'
import { AuthCreators, AuthTypes } from 'store/actions/auth'
import { ViewerCreators, ViewerTypes } from 'store/actions/viewer'

import { isAuthenticated } from 'store/selectors/session'

function* loadResources() {
  yield put(ViewerCreators.loadViewerRequest())

  const { success } = yield race({
    success: take(ViewerTypes.LOAD_VIEWER_SUCCESS),
    failure: take(ViewerTypes.LOAD_VIEWER_FAILURE),
  })

  return !!success
}

function* restoreSession() {
  while (true) {
    const action = yield take([
      AppTypes.COMPLETE_REHYDRATION,
      AuthTypes.SIGN_IN_SUCCESS,
    ])

    const authenticated = yield select(isAuthenticated)

    if (authenticated) {
      const isLoaded = yield call(loadResources)

      yield put(AppCreators.completeRefetch())

      if (isLoaded) {
        if (action.type !== AppTypes.COMPLETE_REHYDRATION) {
          yield call(
            NavigationService.dispatch,
            NavigationActions.navigate({ routeName: app.redirector }),
          )
        }
      } else {
        yield put(AuthCreators.logOutSuccess())
      }
    }
  }
}

export default function* main() {
  yield all([fork(restoreSession)])
}
