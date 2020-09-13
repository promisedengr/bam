import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import PT from 'prop-types'

import { ViewPropTypes } from 'constants/propTypes'

import { Container, Label } from './styles'

class Option extends Component {
  handlePress = () => {
    const { option, onPress } = this.props
    onPress(option)
  }

  render() {
    const { option, getOptionLabel, isCancel, isDisabled, style } = this.props

    return (
      <Container
        as={TouchableOpacity}
        style={style}
        isDisabled={isDisabled}
        onPress={this.handlePress}
      >
        <Label isCancel={isCancel} isDisabled={isDisabled}>
          {getOptionLabel(option)}
        </Label>
      </Container>
    )
  }
}

Option.propTypes = {
  getOptionLabel: PT.func.isRequired,
  isCancel: PT.bool.isRequired,
  isDisabled: PT.bool.isRequired,
  option: PT.object.isRequired,
  style: ViewPropTypes.style,
  onPress: PT.func.isRequired,
}

Option.defaultProps = {
  style: {},
}

export { Option }
