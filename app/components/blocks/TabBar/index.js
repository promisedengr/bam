import React from 'react'
import PT from 'prop-types'

import map from 'lodash/map'

import { ViewPropTypes } from 'constants/propTypes'

import { Container, TabItem } from './styles'

const TabBar = ({ navigationState, jumpTo, style }) => {
  const tabList = map(navigationState.routes, route => (
    <TabItem
      key={route.key}
      route={route}
      navigationState={navigationState}
      // eslint-disable-next-line
      onPress={() => {
        jumpTo(route.key)
      }}
    />
  ))

  return <Container style={style}>{tabList}</Container>
}

TabBar.propTypes = {
  jumpTo: PT.func.isRequired,
  navigationState: PT.object.isRequired,
  style: ViewPropTypes.style,
}

TabBar.defaultProps = {
  style: {},
}

export { TabBar }
