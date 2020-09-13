import React, { Component } from 'react'
import PT from 'prop-types'

import { ViewPropTypes } from 'constants/propTypes'

import { Touchable, Container, Label } from './styles'

class Option extends Component {
  handlePress = () => {
    const { option, onChange } = this.props
    onChange(option.value)
  }

  render() {
    const { option, isSelected, style } = this.props

    return (
      <Touchable onPress={this.handlePress}>
        <Container isSelected={isSelected} style={style}>
          <Label isSelected={isSelected}>{option.extendedLabel}</Label>
        </Container>
      </Touchable>
    )
  }
}

Option.propTypes = {
  isSelected: PT.bool.isRequired,
  option: PT.object.isRequired,
  style: ViewPropTypes.style,
  onChange: PT.func.isRequired,
}

Option.defaultProps = {
  style: {},
}

export default Option
