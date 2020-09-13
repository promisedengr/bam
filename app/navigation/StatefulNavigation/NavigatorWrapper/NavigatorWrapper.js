import React, { Component } from 'react'

import { createDeepLinkingHandler } from 'react-native-deep-link'

import NavigationService from 'services/navigation'

import debugConfig from 'config/debug'

import RootNavigator from 'navigation/navigators/root'

class NavigatorWrapper extends Component {
  /**
   * Initialize the NavigationService
   *
   * @see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
   */
  handleNavigatorRef = ref => {
    NavigationService.setTopLevelNavigator(ref)
  }

  handleNavigationChange = (prevState, nextState, action) => {
    if (debugConfig.logNavigationActions) {
      // eslint-disable-next-line
      console.tron.display({
        name: 'Navigator',
        value: {
          action,
          prevState,
          nextState,
        },
        preview: action.type,
      })
    }
  }

  render() {
    return (
      <RootNavigator
        ref={this.handleNavigatorRef}
        enableURLHandling={false}
        onNavigationStateChange={this.handleNavigationChange}
      />
    )
  }
}

const SCHEMES = []

export default createDeepLinkingHandler(SCHEMES)(NavigatorWrapper)
