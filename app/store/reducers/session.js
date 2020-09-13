import Immutable from 'seamless-immutable'

import { createReducer } from 'utils/redux'

import { AuthTypes } from 'store/actions/auth'

const INITIAL_STATE = Immutable({
  accessToken: null,
  refreshToken: null,
  expiresIn: null,
})

const signInSuccess = (state, { accessToken, refreshToken, expiresIn }) =>
  state.merge({ accessToken, refreshToken, expiresIn })

const HANDLERS = {
  [AuthTypes.SIGN_IN_SUCCESS]: signInSuccess,
}

export default createReducer(INITIAL_STATE, HANDLERS, {
  resetOn: [AuthTypes.LOG_OUT_SUCCESS],
})
