import React, { Component } from 'react'
import blacklistedProps from 'styled-system/props'
import PT from 'prop-types'

import { TextInputMask } from 'react-native-masked-text'

import omit from 'lodash/omit'

import { ViewPropTypes, FinalFormPropTypes } from 'constants/propTypes'

import { Container, Input, FieldLabel, FieldBottom } from './styles'

class MaskedTextInput extends Component {
  state = {
    isFocused: false,
  }

  handleFocus = () => {
    const { input } = this.props

    this.setState({ isFocused: true }, input.onFocus)
  }

  handleBlur = () => {
    const { input } = this.props

    this.setState({ isFocused: false }, input.onBlur)
  }

  handleTextChange = (maskedValue, rawValue) => {
    const { input } = this.props
    input.onChange(rawValue)
  }

  render() {
    const { input, meta, label, isDisabled, style, ...restProps } = this.props
    const { onChange, ...restInput } = input
    const { isFocused } = this.state

    const hasError = FieldBottom.hasError(meta)

    return (
      <Container style={style}>
        <FieldLabel label={label} />

        <Input
          {...omit(restProps, blacklistedProps)}
          {...restInput}
          as={TextInputMask}
          includeRawValueInChangeText
          isFocused={isFocused}
          hasError={hasError}
          onChangeText={this.handleTextChange}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          isDisabled={isDisabled}
        />

        <FieldBottom meta={meta} />
      </Container>
    )
  }
}

MaskedTextInput.propTypes = {
  ...FinalFormPropTypes,
  isCentered: PT.bool,
  isDisabled: PT.bool,
  label: PT.string,
  style: ViewPropTypes.style,
}

MaskedTextInput.defaultProps = {
  isCentered: false,
  isDisabled: false,
  label: null,
  style: {},
}

export { MaskedTextInput }
