import { RESOURCE_TYPES } from 'constants/api'
import { createIncluderBuilder } from 'utils/api'

export default apiCall => ({
  get: () =>
    apiCall({
      endpoint: '/user',
      method: 'GET',
      query: {
        include: createIncluderBuilder(['profile', 'emailCredential']),
      },
      needsNormalization: true,
    }),

  update: ({ firstName, lastName, email, phoneNumber, avatarId }) =>
    apiCall({
      endpoint: '/user/profile',
      method: 'POST',
      query: {
        include: createIncluderBuilder(['avatar', 'emailCredential']),
        data: {
          type: RESOURCE_TYPES.profiles,
          attributes: {
            firstName,
            lastName,
            email,
            phoneNumber,
          },
        },
        relationship: {
          avatar: {
            type: 'image',
            id: avatarId,
          },
        },
      },
      needsNormalization: true,
    }),
})
