import React from 'react'
import PT from 'prop-types'

import { ViewPropTypes } from 'constants/propTypes'

import { Container, Text, IconContainer } from './styles'

const FieldLabel = ({ label, icon, style }) => {
  if (!label && !icon) {
    return null
  }

  const textEl = label && <Text>{label}</Text>
  const iconContainerEl = icon && <IconContainer>{icon}</IconContainer>

  return (
    <Container style={style}>
      {textEl}
      {iconContainerEl}
    </Container>
  )
}

FieldLabel.propTypes = {
  icon: PT.node,
  label: PT.string,
  style: ViewPropTypes.style,
}

FieldLabel.defaultProps = {
  icon: null,
  label: '',
  style: {},
}

export { FieldLabel }
