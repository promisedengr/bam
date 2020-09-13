import React, { Component } from 'react'
import PT from 'prop-types'

import { ViewPropTypes, FinalFormPropTypes } from 'constants/propTypes'

import { Image } from '../Image'

import { Container, IconContainer, ToggleIcon } from './styles'

class ToggleButton extends Component {
  handlePress = () => {
    const { input } = this.props
    input.onChange(!input.value)
  }

  render() {
    const {
      input,
      variant,
      isDisabled,
      style,
      iconGlyph,
      iconCheckedGlyph,
    } = this.props

    const isChecked = !!input.value

    return (
      <Container
        isDisabled={isDisabled}
        style={style}
        onPress={this.handlePress}
      >
        <IconContainer
          variant={variant}
          isDisabled={isDisabled}
          isChecked={isChecked}
        >
          <ToggleIcon
            variant={variant}
            isChecked={isChecked}
            iconGlyph={iconGlyph}
            iconCheckedGlyph={iconCheckedGlyph}
          />
        </IconContainer>
      </Container>
    )
  }
}

ToggleButton.propTypes = {
  ...FinalFormPropTypes,
  iconCheckedGlyph: Image.propTypes.source.isRequired,
  iconGlyph: Image.propTypes.source.isRequired,
  isDisabled: PT.bool,
  style: ViewPropTypes.style,
  variant: PT.string,
}

ToggleButton.defaultProps = {
  isDisabled: false,
  style: {},
  variant: 'primary',
}

export { ToggleButton }
