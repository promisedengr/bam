import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { isRehydrated, isRestored } from 'store/selectors/app'
import { getCurrentLocale } from 'store/selectors/locale'
import { getCurrentTheme } from 'store/selectors/theme'

import { AppCreators } from 'store/actions/app'
import { PushNotificationsCreators } from 'store/actions/pushNotifications'

import Component from './StatefulNavigation'

const SELECTOR = createStructuredSelector({
  isRehydrated,
  isRestored,
  locale: getCurrentLocale,
  theme: getCurrentTheme,
})

const ACTIONS = {
  onStartup: AppCreators.startup,
  onPushListenerReceive: PushNotificationsCreators.receivePushListener,
}

export default connect(
  SELECTOR,
  ACTIONS,
)(Component)
