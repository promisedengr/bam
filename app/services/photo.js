import ImagePicker from 'react-native-image-picker'
import { lookup } from 'react-native-mime-types'

import merge from 'lodash/merge'

import PickingService from './picking'

const launchCamera = (dirtyOptions, callback) => {
  const DEFAULT_OPTIONS = {
    noData: true,
    storageOptions: {
      skipBackup: true,
      cameraRoll: true,
      waitUntilSaved: true,
      path: 'images',
    },
  }

  const options = merge({}, DEFAULT_OPTIONS, dirtyOptions)

  ImagePicker.launchCamera(options, callback)
}

const launchImageLibrary = (dirtyOptions, callback) => {
  const DEFAULT_OPTIONS = {
    noData: true,
    storageOptions: {
      skipBackup: true,
      cameraRoll: true,
      waitUntilSaved: true,
      path: 'images',
    },
  }

  const options = merge({}, DEFAULT_OPTIONS, dirtyOptions)

  ImagePicker.launchImageLibrary(options, callback)
}

const file2Attachment = (response, fieldName = 'content') => {
  const name = response.fileName || response.uri.split('/').pop()
  const type = response.type || lookup(name)

  return {
    name,
    type,
    fieldName,
    uri: PickingService.platform({
      ios: response.uri.replace('file://', ''),
      android: response.uri,
    }),
  }
}

export default {
  launchCamera,
  launchImageLibrary,
  file2Attachment,
}
