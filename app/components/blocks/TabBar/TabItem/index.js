import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import PT from 'prop-types'

import indexOf from 'lodash/indexOf'
import size from 'lodash/size'

import { Container, Label } from './styles'

class TabItem extends Component {
  handlePress = () => {}

  render() {
    const { navigationState, route, onPress } = this.props
    const { index, routes } = navigationState

    const tabIndex = indexOf(routes, route)
    const isFocused = tabIndex === index
    const isLast = tabIndex + 1 === size(routes)

    return (
      <Container
        as={TouchableOpacity}
        isFocused={isFocused}
        isLast={isLast}
        onPress={onPress}
      >
        <Label isFocused={isFocused}>{route.title}</Label>
      </Container>
    )
  }
}

TabItem.propTypes = {
  navigationState: PT.object.isRequired,
  route: PT.object.isRequired,
  onPress: PT.func.isRequired,
}

export { TabItem }
