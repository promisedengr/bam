import { NativeModules } from 'react-native'

import Immutable from 'seamless-immutable'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

import appConfig from './app'
import debugConfig from './debug'

if (debugConfig.useReactotron) {
  const scriptUrl = NativeModules.SourceCode.scriptURL
  const scriptHostname = scriptUrl.split('://')[1].split(':')[0]

  Reactotron.configure({
    name: appConfig.name,
    host: scriptHostname,
  })
    .useReactNative({
      asyncStorage: false,
      networking: {
        ignoreUrls: /symbolicate/,
      },
    })
    .use(reduxPlugin({ onRestore: Immutable }))
    .use(sagaPlugin())
    .connect()

  Reactotron.clear()

  console.tron = Reactotron // eslint-disable-line
} else {
  console.tron = console // eslint-disable-line
}
