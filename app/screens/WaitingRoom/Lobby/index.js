import { connect } from 'react-redux'
import { createStructuredSelector, createSelector } from 'reselect'

import { RESOURCE_TYPES } from 'constants/api'

import { getData, getResourceFromData } from 'store/selectors/data'

import { AuthCreators } from 'store/actions/auth'

import Component from './Lobby'

const roomSelector = createSelector(
  (_, props) => props.navigation.getParam('room'),
  (_, props) => props.navigation.getParam('roomId'),
  getData,
  (room, roomId, data) =>
    room || getResourceFromData(RESOURCE_TYPES.waitingRooms, data, roomId),
)

const SELECTOR = createStructuredSelector({
  room: roomSelector,
})

const ACTIONS = {
  onLogOut: AuthCreators.logOutRequest,
}

export default connect(
  SELECTOR,
  ACTIONS,
)(Component)
