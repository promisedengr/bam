import React, { Component } from 'react'
import PT from 'prop-types'

import OneSignal from 'react-native-onesignal'

import { setup as setupI18n } from 'i18n'

import BackgroundService from 'services/background'

import reduxPersistConfig from 'config/reduxPersist'
import servicesConfig from 'config/services'

import { themes, ThemeProvider } from 'theme'

import ProgressScreen from 'screens/Progress'

import NavigatorWrapper from './NavigatorWrapper'

import { Container } from './styles'

class StatefulNavigation extends Component {
  componentWillMount() {
    if (!reduxPersistConfig.active) {
      this.props.onStartup()
    }

    this.setupBackgroundColor()
    this.setupOneSignal()
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isRehydrated && nextProps.isRehydrated) {
      setupI18n(this.props.locale)
    }
  }

  get theme() {
    return themes[this.props.theme]
  }

  setupBackgroundColor = () => {
    BackgroundService.setColor('#ffffff')
  }

  setupOneSignal = () => {
    const { onPushListenerReceive } = this.props

    OneSignal.init(servicesConfig.oneSignal.appId, {
      kOSSettingsKeyAutoPrompt: true,
    })

    OneSignal.addEventListener('ids', onPushListenerReceive)
  }

  render() {
    const { isRestored } = this.props

    const contentEl = isRestored ? <NavigatorWrapper /> : <ProgressScreen />

    return (
      <ThemeProvider theme={this.theme}>
        <Container>{contentEl}</Container>
      </ThemeProvider>
    )
  }
}

StatefulNavigation.propTypes = {
  isRehydrated: PT.bool.isRequired,
  isRestored: PT.bool.isRequired,
  locale: PT.string.isRequired,
  theme: PT.string.isRequired,
  onPushListenerReceive: PT.func.isRequired,
  onStartup: PT.func.isRequired,
}

export default StatefulNavigation
