import { RESOURCE_TYPES } from 'constants/api'

export default apiCall => ({
  signIn: ({ email, password }) =>
    apiCall({
      endpoint: '/user/tokens',
      method: 'POST',
      query: {
        data: {
          type: RESOURCE_TYPES.tokens,
          attributes: {
            email,
            password,
          },
        },
      },
      needsNormalization: false,
    }),

  signUp: ({ email, password, firstName, lastName }) =>
    apiCall({
      endpoint: '/users',
      method: 'POST',
      query: {
        data: {
          type: RESOURCE_TYPES.users,
          attributes: {
            email,
            password,
            firstName,
            lastName,
          },
        },
      },
      needsNormalization: false,
    }),

  resetPassword: ({ email }) =>
    apiCall({
      endpoint: '/reset_password',
      method: 'POST',
      query: {
        data: {
          attributes: {
            email,
          },
        },
      },
      needsNormalization: false,
    }),
})
