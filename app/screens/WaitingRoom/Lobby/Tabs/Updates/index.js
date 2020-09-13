import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getViewer } from 'store/selectors/viewer'

import { WaitingRoomsCreators } from 'store/actions/waitingRooms'

import { Updates as Component } from './Updates'

const SELECTOR = createStructuredSelector({
  viewer: getViewer,
})

const ACTIONS = {
  onCreate: WaitingRoomsCreators.createWaitingRoomUpdateRequest,
}

export const Updates = connect(
  SELECTOR,
  ACTIONS,
)(Component)
