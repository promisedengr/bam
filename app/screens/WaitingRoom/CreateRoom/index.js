import { connect } from 'react-redux'

import { WaitingRoomsCreators } from 'store/actions/waitingRooms'

import Component from './CreateRoom'

const ACTIONS = {
  onCreate: WaitingRoomsCreators.createWaitingRoomRequest,
}

export default connect(
  null,
  ACTIONS,
)(Component)
