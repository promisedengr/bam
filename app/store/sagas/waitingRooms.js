import {
  all,
  put,
  call,
  take,
  race,
  takeLatest,
  getContext,
} from 'redux-saga/effects'

import { UploaderCreators, UploaderTypes } from 'store/actions/uploader'
import {
  WaitingRoomsCreators,
  WaitingRoomsTypes,
} from 'store/actions/waitingRooms'

function* uploadImage(image) {
  yield put(UploaderCreators.uploadImageRequest(image))

  const { failure, success } = yield race({
    success: take(UploaderTypes.UPLOAD_IMAGE_SUCCESS),
    failure: take(UploaderTypes.UPLOAD_IMAGE_FAILURE),
  })

  return {
    ok: !!success,
    response: (success || failure).response,
  }
}

function* createWaitingRoom({ name, gender, expectedDate, avatar, resolve }) {
  const result = yield call(uploadImage, avatar)

  if (!result.ok) {
    yield call(resolve, result.response)

    return yield put(
      WaitingRoomsCreators.createWaitingRoomFailure(result.response),
    )
  }

  const api = yield getContext('api')

  const avatarId = result.response.meta.data[0].id
  const response = yield call(api.waitingRooms.createWaitingRoom, {
    name,
    gender,
    expectedDate,
    avatarId,
  })

  if (response.ok) {
    yield put(WaitingRoomsCreators.createWaitingRoomSuccess(response))
  } else {
    yield put(WaitingRoomsCreators.createWaitingRoomFailure(response))
  }

  return yield call(resolve, response)
}

function* createWaitingRoomUpdate({ roomId, description, image }) {
  let imageId

  if (image) {
    const result = yield call(uploadImage, image)

    if (!result.ok) {
      yield put(WaitingRoomsCreators.createWaitingRoomFailure(result.response))
      return
    }

    imageId = result.response.meta.data[0].id
  }

  const api = yield getContext('api')

  const response = yield call(api.waitingRooms.createWaitingRoomUpdate, {
    roomId,
    description,
    imageId,
  })

  if (response.ok) {
    yield put(WaitingRoomsCreators.createWaitingRoomUpdateSuccess(response))
  } else {
    yield put(WaitingRoomsCreators.createWaitingRoomUpdateFailure(response))
  }
}

export default function* main() {
  yield all([
    takeLatest(
      WaitingRoomsTypes.CREATE_WAITING_ROOM_REQUEST,
      createWaitingRoom,
    ),
    takeLatest(
      WaitingRoomsTypes.CREATE_WAITING_ROOM_UPDATE_REQUEST,
      createWaitingRoomUpdate,
    ),
  ])
}
