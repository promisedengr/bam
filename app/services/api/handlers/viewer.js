import { buildInclude, buildResource } from 'utils/api'

import { INCLUDE_SETS, RESOURCE_TYPES } from 'constants/api'

export default apiCall => ({
  loadViewer: () =>
    apiCall({
      endpoint: '/user',
      query: {
        include: buildInclude([
          ...INCLUDE_SETS.fullUser(),
          ...INCLUDE_SETS.fullProfile('profile'),
          ...INCLUDE_SETS.fullWaitingRoom('roomsParticipating.waitingRoom'),
          ...INCLUDE_SETS.fullWaitingRoomUpdate(
            'roomsParticipating.waitingRoom.waitingRoomUpdates',
          ),
        ]),
      },
    }),

  updateProfile: ({ attributes, relationships }) =>
    apiCall({
      endpoint: '/user/profile',
      method: 'PATCH',
      query: {
        data: buildResource({
          type: RESOURCE_TYPES.profiles,
          attributes,
          relationships,
        }),
        include: buildInclude(INCLUDE_SETS.fullProfile()),
      },
    }),

  changePhoneNumber: ({ countryCode, phoneNumber, kind = 'primary' }) =>
    apiCall({
      endpoint: '/user/profile/phone_numbers',
      method: 'POST',
      query: {
        data: {
          type: RESOURCE_TYPES.phoneNumbers,
          attributes: {
            kind,
            phoneNumber: `${countryCode}${phoneNumber}`,
          },
        },
        include: buildInclude(INCLUDE_SETS.fullProfile()),
      },
    }),

  verifyPhoneNumber: ({ phoneNumberId, verificationCode }) =>
    apiCall({
      endpoint: `/user/profile/phone_numbers/${phoneNumberId}/verifications/check`,
      method: 'POST',
      query: {
        data: {
          type: RESOURCE_TYPES.phoneNumbers,
          attributes: {
            verificationCode,
          },
        },
        include: buildInclude(INCLUDE_SETS.fullProfile()),
      },
    }),

  sendPhoneNumberCode: ({ phoneNumberId }) =>
    apiCall({
      endpoint: `/user/profile/phone_numbers/${phoneNumberId}/verifications`,
      method: 'POST',
      needsNormalization: false,
    }),
})
