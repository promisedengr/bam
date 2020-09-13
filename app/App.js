/* eslint react/prefer-stateless-function: 0 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'

import debugConfig from 'config/debug'

import { StatefulNavigation } from 'navigation'

import createStore from 'store'

class App extends Component {
  store = createStore()

  render() {
    return (
      <Provider store={this.store}>
        <StatefulNavigation />
      </Provider>
    )
  }
}

// NOTE: Allow reactotron overlay for fast design in dev mode
export default (debugConfig.useReactotron ? console.tron.overlay(App) : App) // eslint-disable-line
