import Immutable from 'seamless-immutable'

import pick from 'lodash/pick'

import { createReducer } from 'utils/redux'

import { AppTypes } from 'store/actions/app'
import { AuthTypes } from 'store/actions/auth'
import { PushNotificationsTypes } from 'store/actions/pushNotifications'

export const INITIAL_STATE = Immutable({
  isRehydrated: false,
  isRefetched: false,
  deepLink: null,
  pushListener: {
    pushToken: null,
    userId: null,
  },
})

const completeRefetch = state => state.merge({ isRefetched: true })
const completeRehydration = state => state.merge({ isRehydrated: true })
const deepLinkMatched = (state, { deepLink }) => state.merge({ deepLink })

const receivePushListener = (state, { pushListener }) =>
  state.merge({ pushListener })

export const HANDLERS = {
  [AppTypes.COMPLETE_REFETCH]: completeRefetch,
  [AppTypes.COMPLETE_REHYDRATION]: completeRehydration,
  [AppTypes.DEEP_LINK_MATCHED]: deepLinkMatched,
  [PushNotificationsTypes.RECEIVE_PUSH_LISTENER]: receivePushListener,
}

const resetFn = (state, initialState) =>
  initialState.merge(pick(state, 'pushListener', 'isRehydrated'))

export default createReducer(INITIAL_STATE, HANDLERS, {
  resetFn,
  resetOn: [AuthTypes.LOG_OUT_SUCCESS],
})
