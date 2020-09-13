import { all, put, call, takeLatest } from 'redux-saga/effects'

import { NavigationActions } from 'react-navigation'

import NavigationService from 'services/navigation'

import { app } from 'constants/routeNames'

import { AppCreators, AppTypes } from 'store/actions/app'

function* startup() {
  yield put(AppCreators.completeRehydration())
}

function* deepLinkMatched() {
  yield call(
    NavigationService.dispatch,
    NavigationActions.navigate({ routeName: app.redirector }),
  )
}

export default function* main() {
  yield all([
    takeLatest(AppTypes.STARTUP, startup),
    takeLatest(AppTypes.DEEP_LINK_MATCHED, deepLinkMatched),
  ])
}
