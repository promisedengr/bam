import React, { Component } from 'react'
import PT from 'prop-types'

import { ViewPropTypes, FinalFormPropTypes } from 'constants/propTypes'

import { Container, IconContainer, Icon, Label } from './styles'

class Checkbox extends Component {
  handlePress = () => {
    const { input } = this.props
    input.onChange(!input.value)
  }

  render() {
    const { input, variant, label, isDisabled, style } = this.props

    const isChecked = !!input.value

    const labelEl = label && <Label variant={variant}>{label}</Label>

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
          <Icon
            variant={variant}
            isDisabled={isDisabled}
            isChecked={isChecked}
          />
        </IconContainer>

        {labelEl}
      </Container>
    )
  }
}

Checkbox.propTypes = {
  ...FinalFormPropTypes,
  isDisabled: PT.bool,
  label: PT.string,
  style: ViewPropTypes.style,
  variant: PT.string,
}

Checkbox.defaultProps = {
  isDisabled: false,
  label: null,
  style: {},
  variant: 'primary',
}

export { Checkbox }
