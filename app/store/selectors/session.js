import { createSelector } from 'reselect'

const getState = state => state.session

export const getJWTToken = createSelector(
  getState,
  state => state.accessToken,
)

export const getJWTHeader = createSelector(
  getJWTToken,
  token => (token ? `Bearer ${token}` : null),
)

export const isAuthenticated = createSelector(
  getJWTToken,
  token => token !== null,
)
