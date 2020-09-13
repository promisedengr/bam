import { all, takeLatest, call, put, getContext } from 'redux-saga/effects'

import { NavigationActions } from 'react-navigation'

import { app, auth } from 'constants/routeNames'

import NavigationService from 'services/navigation'

import { AuthCreators, AuthTypes } from 'store/actions/auth'

function* signIn({ email, password, resolve }) {
  const api = yield getContext('api')
  const response = yield call(api.auth.signIn, {
    email,
    password,
  })

  if (response.ok) {
    yield put(
      AuthCreators.signInSuccess(
        response.data.access,
        response.data.refresh,
        response.data.accessExpiresAt,
      ),
    )
  } else {
    yield put(AuthCreators.signInFailure(response))
  }

  if (resolve) {
    yield call(resolve, response)
  }
}

function* signUp({ email, password, firstName, lastName, resolve }) {
  const api = yield getContext('api')
  const response = yield call(api.auth.signUp, {
    email,
    password,
    firstName,
    lastName,
  })

  if (response.ok) {
    yield put(AuthCreators.signUpSuccess(email, password, resolve))
  } else {
    yield put(AuthCreators.signUpFailure(response))
  }

  if (resolve) {
    yield call(resolve, response)
  }
}

function* logOut() {
  yield call(
    NavigationService.dispatch,
    NavigationActions.navigate({ routeName: app.progress }),
  )

  yield put(AuthCreators.logOutSuccess())

  yield call(
    NavigationService.dispatch,
    NavigationActions.navigate({ routeName: auth.welcome }),
  )
}

function* resetPassword({ email, resolve }) {
  const api = yield getContext('api')
  const response = yield call(api.auth.resetPassword, { email })

  if (response.ok) {
    yield put(AuthCreators.resetPasswordSuccess())
  } else {
    yield put(AuthCreators.resetPasswordFailure(response))
  }

  if (resolve) {
    yield call(resolve, response)
  }
}

export default function* main() {
  yield all([
    takeLatest([AuthTypes.SIGN_IN_REQUEST, AuthTypes.SIGN_UP_SUCCESS], signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AuthTypes.LOG_OUT_REQUEST, logOut),
    takeLatest(AuthTypes.RESET_PASSWORD_REQUEST, resetPassword),
  ])
}
