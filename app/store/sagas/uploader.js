import { all, fork, put, take, call, getContext } from 'redux-saga/effects'

import { UploaderCreators, UploaderTypes } from 'store/actions/uploader'

function* watchImageUpload() {
  const api = yield getContext('api')

  while (true) {
    const { image, body } = yield take(UploaderTypes.UPLOAD_IMAGE_REQUEST)

    const response = yield call(api.uploader.uploadImage, {
      image,
      body,
    })

    if (response.ok) {
      yield put(UploaderCreators.uploadImageSuccess(response))
    } else {
      yield put(UploaderCreators.uploadImageFailure(response))
    }
  }
}

export default function* main() {
  yield all([fork(watchImageUpload)])
}
