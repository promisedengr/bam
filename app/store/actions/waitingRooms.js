import { createActions } from 'reduxsauce'

export const {
  Types: WaitingRoomsTypes,
  Creators: WaitingRoomsCreators,
} = createActions(
  {
    createWaitingRoomRequest: [
      'name',
      'gender',
      'expectedDate',
      'avatar',
      'resolve',
    ],
    createWaitingRoomSuccess: ['response'],
    createWaitingRoomFailure: ['response'],

    createWaitingRoomUpdateRequest: ['roomId', 'description', 'image'],
    createWaitingRoomUpdateSuccess: ['response'],
    createWaitingRoomUpdateFailure: ['response'],
  },
  { prefix: 'WaitingRooms/' },
)
