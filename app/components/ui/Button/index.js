import React, { Component } from 'react'
import PT from 'prop-types'

import noop from 'lodash/noop'

import { ViewPropTypes } from 'constants/propTypes'

import { Container, Touchable, Text } from './styles'

class Button extends Component {
  state = {
    isPressed: false,
  }

  handlePress = () => {
    const { onPress } = this.props
    onPress()
  }

  handlePressIn = () => {
    this.setState({ isPressed: true })
  }

  handlePressOut = () => {
    this.setState({ isPressed: false })
  }

  render() {
    const {
      title,
      iconComponent,
      iconLeftComponent,
      iconRightComponent,
      variant,
      isDisabled,
      scale,
      style,
    } = this.props
    const { isPressed } = this.state

    const iconEl = iconComponent
    const iconLeftEl = !iconEl && iconLeftComponent
    const iconRightEl = !iconEl && iconRightComponent

    const titleEl = !iconEl && !!title && (
      <Text
        variant={variant}
        scale={scale}
        isDisabled={isDisabled}
        isPressed={isPressed}
        isCentered={!(iconLeftEl || iconRightEl)}
      >
        {title}
      </Text>
    )

    return (
      <Touchable
        disabled={isDisabled}
        onPress={this.handlePress}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
      >
        <Container
          variant={variant}
          isDisabled={isDisabled}
          isPressed={isPressed}
          scale={scale}
          style={style}
        >
          {iconEl}
          {iconLeftEl}
          {titleEl}
          {iconRightEl}
        </Container>
      </Touchable>
    )
  }
}

Button.propTypes = {
  iconComponent: PT.node,
  iconLeftComponent: PT.node,
  iconRightComponent: PT.node,
  isDisabled: PT.bool,
  scale: PT.string,
  style: ViewPropTypes.style,
  title: PT.string,
  variant: PT.string,
  onPress: PT.func,
}

Button.defaultProps = {
  iconComponent: null,
  iconLeftComponent: null,
  iconRightComponent: null,
  isDisabled: false,
  onPress: noop,
  scale: null,
  style: {},
  title: null,
  variant: 'primary',
}

export { Button }
