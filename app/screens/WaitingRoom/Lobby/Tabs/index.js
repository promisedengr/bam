/* eslint react/no-unused-state: 0 */

import React, { Component, createElement as ce } from 'react'
import { Dimensions } from 'react-native'
import PT from 'prop-types'

import { ViewPropTypes } from 'constants/propTypes'

import { Container, TabBar, BabyTalk, Extras, Updates } from './styles'

const TAB_KEYS = {
  babyTalk: 'BabyTalk',
  extras: 'Extras',
  updates: 'Updates',
}

const TAB_SCENES = {
  [TAB_KEYS.babyTalk]: BabyTalk,
  [TAB_KEYS.extras]: Extras,
  [TAB_KEYS.updates]: Updates,
}

class Tabs extends Component {
  state = {
    index: 0,
    routes: [
      { key: TAB_KEYS.updates, title: 'Updates' },
      { key: TAB_KEYS.babyTalk, title: 'Baby Talk' },
      { key: TAB_KEYS.extras, title: 'Extras' },
    ],
  }

  handleIndexChange = index => this.setState({ index })

  renderTabBar = props => <TabBar {...props} />

  renderScene = ({ route }) => {
    const { room } = this.props
    return ce(TAB_SCENES[route.key], { room })
  }

  render() {
    const { style } = this.props

    return (
      <Container
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={style}
        onIndexChange={this.handleIndexChange}
      />
    )
  }
}

Tabs.propTypes = {
  room: PT.object.isRequired,
  style: ViewPropTypes.style,
}

Tabs.defaultProps = {
  style: {},
}

export { Tabs }
