import { createSelector } from 'reselect'

import { denormalize } from 'utils/redux'

import { getData } from './data'

const getState = state => state.viewer

export const getViewer = createSelector(
  getState,
  getData,
  (state, data) => denormalize(data, state.type, state.id),
)

export const getViewerType = createSelector(
  getState,
  state => state.type,
)
