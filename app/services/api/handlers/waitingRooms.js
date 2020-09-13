import assign from 'lodash/assign'

import { buildInclude } from 'utils/api'

import { RESOURCE_TYPES, INCLUDE_SETS } from 'constants/api'

export default apiCall => ({
  createWaitingRoom: ({ name, gender, expectedDate, avatarId }) =>
    apiCall({
      endpoint: '/waiting_rooms',
      method: 'POST',
      query: {
        data: {
          type: RESOURCE_TYPES.waitingRooms,
          attributes: {
            name,
            gender,
            expectedDate,
          },
          relationships: {
            avatar: {
              data: {
                type: RESOURCE_TYPES.images,
                id: avatarId,
              },
            },
          },
        },
        include: buildInclude(INCLUDE_SETS.fullWaitingRoom()),
      },
    }),

  createWaitingRoomUpdate: ({ roomId, description, imageId }) =>
    apiCall({
      endpoint: '/waiting_room_updates',
      method: 'POST',
      query: {
        data: {
          type: RESOURCE_TYPES.waitingRoomUpdates,
          attributes: {
            description,
          },
          relationships: assign(
            {
              waitingRoom: {
                data: {
                  type: RESOURCE_TYPES.waitingRooms,
                  id: roomId,
                },
              },
            },
            imageId && {
              image: {
                data: {
                  type: RESOURCE_TYPES.images,
                  id: imageId,
                },
              },
            },
          ),
        },
        include: buildInclude(INCLUDE_SETS.fullWaitingRoomUpdate()),
      },
    }),
})
