import { createActions } from 'reduxsauce'

export const { Types: AuthTypes, Creators: AuthCreators } = createActions(
  {
    signInRequest: ['email', 'password', 'resolve'],
    signInSuccess: ['accessToken', 'refreshToken', 'expiresIn'],
    signInFailure: ['error'],

    signUpRequest: ['email', 'password', 'firstName', 'lastName', 'resolve'],
    signUpSuccess: ['email', 'password', 'resolve'],
    signUpFailure: ['error'],

    resetPasswordRequest: ['email', 'resolve'],
    resetPasswordSuccess: null,
    resetPasswordFailure: ['error'],

    logOutRequest: null,
    logOutSuccess: null,
  },
  { prefix: 'Auth/' },
)
