import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import PT from 'prop-types'

import { ViewPropTypes } from 'constants/propTypes'

import { Container, Count } from './styles'

class Reaction extends Component {
  handlePress = () => {}

  render() {
    const { count, style } = this.props

    return (
      <Container as={TouchableOpacity} style={style} onPress={this.handlePress}>
        <Count>{count}</Count>
      </Container>
    )
  }
}

Reaction.propTypes = {
  count: PT.number.isRequired,
  style: ViewPropTypes.style,
}

Reaction.defaultProps = {
  style: {},
}

export { Reaction }
