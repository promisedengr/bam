import { createActions } from 'reduxsauce'

export const { Types: ViewerTypes, Creators: ViewerCreators } = createActions(
  {
    loadViewerRequest: null,
    loadViewerSuccess: ['response'],
    loadViewerFailure: ['response'],

    editProfileRequest: [
      'firstName',
      'lastName',
      'avatar',
      'newPhoneNumber',
      'resolve',
    ],
    editProfileSuccess: ['response'],
    editProfileFailure: ['response'],

    updateProfileRequest: ['attributes', 'relationships', 'resolve'],
    updateProfileSuccess: ['response'],
    updateProfileFailure: ['response'],

    changePhoneNumberRequest: ['countryCode', 'phoneNumber', 'resolve'],
    changePhoneNumberSuccess: ['response'],
    changePhoneNumberFailure: ['response'],

    verifyPhoneNumberRequest: ['phoneNumberId', 'verificationCode', 'resolve'],
    verifyPhoneNumberSuccess: ['response'],
    verifyPhoneNumberFailure: ['response'],

    sendPhoneNumberCodeRequest: ['phoneNumberId', 'resolve'],
    sendPhoneNumberCodeSuccess: ['response'],
    sendPhoneNumberCodeFailure: ['response'],
  },
  { prefix: 'Viewer/' },
)
