import { createIncluderBuilder } from 'utils/api'

export const RESOURCE_TYPES = {
  images: 'images',
  phoneNumbers: 'phoneNumbers',
  profiles: 'profiles',
  tokens: 'tokens',
  users: 'users',
  waitingRooms: 'waitingRooms',
  waitingRoomUpdates: 'waitingRoomUpdates',
}

export const DICTIONARIES = {}

export const INCLUDE_SETS = (() => {
  const fullUser = createIncluderBuilder([
    'profile',
    'roomsParticipating.waitingRoom',
  ])
  const fullProfile = createIncluderBuilder([
    'avatar',
    'pendingPrimaryPhoneNumber',
    'verifiedPrimaryPhoneNumber',
  ])
  const fullWaitingRoom = createIncluderBuilder([
    'avatar',
    'createdBy',
    'roomsParticipants',
    'waitingRoomUpdates',
  ])
  const fullWaitingRoomUpdate = createIncluderBuilder([
    'image',
    'createdBy',
    'waitingRoom',
  ])

  return {
    fullUser,
    fullProfile,
    fullWaitingRoom,
    fullWaitingRoomUpdate,
  }
})()
