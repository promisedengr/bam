import React, { Component } from 'react'
import blacklistedProps from 'styled-system/props'
import PT from 'prop-types'

import omit from 'lodash/omit'

import { ViewPropTypes, FinalFormPropTypes } from 'constants/propTypes'

import { Container, Input, FieldLabel, FieldBottom } from './styles'

class TextInput extends Component {
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

  render() {
    const {
      input,
      meta,
      label,
      labelIcon,
      iconLeft,
      iconRight,
      isDisabled,
      style,
      ...restProps
    } = this.props
    const { onChange, ...restInput } = input
    const { isFocused } = this.state

    const hasError = FieldBottom.hasError(meta)

    return (
      <Container style={style}>
        <FieldLabel icon={labelIcon} label={label} />

        <Input
          {...omit(restProps, blacklistedProps)}
          {...restInput}
          isFocused={isFocused}
          hasError={hasError}
          onChangeText={onChange}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          isDisabled={isDisabled}
        />

        <FieldBottom meta={meta} />
      </Container>
    )
  }
}

TextInput.propTypes = {
  ...FinalFormPropTypes,
  icon: PT.node,
  isCentered: PT.bool,
  isDisabled: PT.bool,
  label: PT.string,
  labelIcon: PT.node,
  style: ViewPropTypes.style,
}

TextInput.defaultProps = {
  icon: null,
  isCentered: false,
  isDisabled: false,
  label: null,
  labelIcon: null,
  style: {},
}

export { TextInput }
