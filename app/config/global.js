import { YellowBox } from 'react-native'

import debugConfig from './debug'

if (__DEV__) {
  // NOTE: If ReactNative's yellow box warnings are too much, it is possible
  //       to turn it off, but the healthier approach is to fix the warnings. =)
  console.disableYellowBox = !debugConfig.yellowBox // eslint-disable-line
  YellowBox.ignoreWarnings(debugConfig.yellowBoxIgnoreWarnings)

  if (debugConfig.proxyXHRRequests) {
    global.XMLHttpRequest = global.originalXMLHttpRequest
      ? global.originalXMLHttpRequest
      : global.XMLHttpRequest
    global.FormData = global.originalFormData
      ? global.originalFormData
      : global.FormData
    global.Blob = global.originalBlob ? global.originalBlob : global.Blob
    global.FileReader = global.originalFileReader
      ? global.originalFileReader
      : global.FileReader
  }
}
