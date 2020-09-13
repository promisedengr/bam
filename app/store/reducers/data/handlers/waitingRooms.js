import { createRelationAddHandler } from 'utils/api'

import { createReducer } from 'utils/redux'

import { WaitingRoomsTypes } from 'store/actions/waitingRooms'

const INITIAL_STATE = {}

const createWaitingRoomUpdateSuccess = createRelationAddHandler(
  'waitingRoomUpdates',
  'waitingRoom',
)

const HANDLERS = {
  [WaitingRoomsTypes.CREATE_WAITING_ROOM_UPDATE_SUCCESS]: createWaitingRoomUpdateSuccess,
}

export default createReducer(INITIAL_STATE, HANDLERS)
