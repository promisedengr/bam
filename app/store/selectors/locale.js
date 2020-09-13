import { createSelector } from 'reselect'

const getState = state => state.locale

export const getCurrentLocale = createSelector(
  getState,
  state => state.locale,
)
