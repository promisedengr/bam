import React from 'react'

import { ViewPropTypes, FinalFormPropTypes } from 'constants/propTypes'

import { Container, FieldError } from './styles'

const FieldBottom = ({ meta, style }) => {
  let content = null

  if (FieldError.hasError(meta)) {
    content = <FieldError meta={meta} />
  } else {
    return null
  }

  return <Container style={style}>{content}</Container>
}

FieldBottom.propTypes = {
  meta: FinalFormPropTypes.meta.isRequired,
  style: ViewPropTypes.style,
}

FieldBottom.defaultProps = {
  style: {},
}

FieldBottom.hasError = FieldError.hasError
FieldBottom.hasSuccess = FieldError.hasSuccess

export { FieldBottom }
