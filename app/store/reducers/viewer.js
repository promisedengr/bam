import Immutable from 'seamless-immutable'

import { createReducer } from 'utils/redux'

import { ViewerTypes } from 'store/actions/viewer'

const INITIAL_STATE = Immutable({
  id: null,
  type: null,
})

const loadViewerSuccess = (state, { response }) =>
  state.merge({
    id: response.meta.data[0].id,
    type: response.meta.data[0].type,
  })

const HANDLERS = {
  [ViewerTypes.LOAD_VIEWER_SUCCESS]: loadViewerSuccess,
}

export default createReducer(INITIAL_STATE, HANDLERS)
