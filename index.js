/* eslint global-require: 0 */

import { AppRegistry } from 'react-native'

import 'config/global'
import 'config/reactotron'
import appConfig from 'config/app'

import App from './app/App'

AppRegistry.registerComponent(appConfig.bundleName, () => App)
