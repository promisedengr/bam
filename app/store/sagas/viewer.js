import {
  all,
  put,
  race,
  call,
  take,
  takeLatest,
  getContext,
} from 'redux-saga/effects'

import { RESOURCE_TYPES } from 'constants/api'

import { ViewerCreators, ViewerTypes } from 'store/actions/viewer'
import { UploaderCreators, UploaderTypes } from 'store/actions/uploader'

function* loadViewer() {
  const api = yield getContext('api')
  const response = yield call(api.viewer.loadViewer)

  if (response.ok) {
    yield put(ViewerCreators.loadViewerSuccess(response))
  } else {
    yield put(ViewerCreators.loadViewerFailure(response))
  }
}

function* editProfile({
  firstName,
  lastName,
  avatar,
  newPhoneNumber,
  resolve,
}) {
  if (newPhoneNumber) {
    yield put(
      ViewerCreators.changePhoneNumberRequest(
        __DEV__ ? '+7' : '+1',
        newPhoneNumber,
      ),
    )

    const { failure } = yield race({
      success: take(ViewerTypes.CHANGE_PHONE_NUMBER_SUCCESS),
      failure: take(ViewerTypes.CHANGE_PHONE_NUMBER_FAILURE),
    })

    if (failure) {
      yield call(resolve, failure.response)
      return yield put(ViewerCreators.editProfileFailure(failure.response))
    }
  }

  const attributes = { firstName, lastName }
  const relationships = {}

  if (avatar) {
    yield put(UploaderCreators.uploadImageRequest(avatar))

    const { failure, success } = yield race({
      success: take(UploaderTypes.UPLOAD_IMAGE_SUCCESS),
      failure: take(UploaderTypes.UPLOAD_IMAGE_FAILURE),
    })

    if (failure) {
      yield call(resolve, failure.response)
      return yield put(ViewerCreators.editProfileFailure(failure.response))
    }

    relationships.avatar = {
      data: {
        type: RESOURCE_TYPES.images,
        id: success.response.meta.data[0].id,
      },
    }
  }

  return yield put(
    ViewerCreators.updateProfileRequest(attributes, relationships, resolve),
  )
}

export function* updateProfile({ attributes, relationships, resolve }) {
  const api = yield getContext('api')
  const response = yield call(api.viewer.updateProfile, {
    attributes,
    relationships,
  })

  if (response.ok) {
    yield put(ViewerCreators.updateProfileSuccess(response))
  } else {
    yield put(ViewerCreators.updateProfileFailure(response))
  }

  if (resolve) {
    yield call(resolve, response)
  }
}

function* changePhoneNumber({ countryCode, phoneNumber, resolve }) {
  const api = yield getContext('api')
  const response = yield call(api.viewer.changePhoneNumber, {
    countryCode,
    phoneNumber,
  })

  if (response.ok) {
    yield put(ViewerCreators.changePhoneNumberSuccess(response))
  } else {
    yield put(ViewerCreators.changePhoneNumberFailure(response))
  }

  if (resolve) {
    yield call(resolve, response)
  }
}

function* verifyPhoneNumber({ phoneNumberId, verificationCode, resolve }) {
  const api = yield getContext('api')
  const response = yield call(api.viewer.verifyPhoneNumber, {
    phoneNumberId,
    verificationCode,
  })

  if (response.ok) {
    yield put(ViewerCreators.verifyPhoneNumberSuccess(response))
  } else {
    yield put(ViewerCreators.verifyPhoneNumberFailure(response))
  }

  if (resolve) {
    yield call(resolve, response)
  }
}

function* sendPhoneNumberCode({ phoneNumberId, resolve }) {
  const api = yield getContext('api')
  const response = yield call(api.viewer.sendPhoneNumberCode, {
    phoneNumberId,
  })

  if (response.ok) {
    yield put(ViewerCreators.sendPhoneNumberCodeSuccess(response))
  } else {
    yield put(ViewerCreators.sendPhoneNumberCodeFailure(response))
  }

  if (resolve) {
    yield call(resolve, response)
  }
}

export default function* main() {
  yield all([
    takeLatest(ViewerTypes.LOAD_VIEWER_REQUEST, loadViewer),
    takeLatest(ViewerTypes.EDIT_PROFILE_REQUEST, editProfile),
    takeLatest(ViewerTypes.UPDATE_PROFILE_REQUEST, updateProfile),
    takeLatest(ViewerTypes.CHANGE_PHONE_NUMBER_REQUEST, changePhoneNumber),
    takeLatest(ViewerTypes.VERIFY_PHONE_NUMBER_REQUEST, verifyPhoneNumber),
    takeLatest(ViewerTypes.SEND_PHONE_NUMBER_CODE_REQUEST, sendPhoneNumberCode),
  ])
}
