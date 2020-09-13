import React from 'react'

import isArray from 'lodash/isArray'

import { FinalFormPropTypes, ViewPropTypes } from 'constants/propTypes'

import { Container, Text } from './styles'

const FieldError = ({ meta, style }) => (
  <Container style={style}>
    <Text>{isArray(meta.error) ? meta.error[0] : meta.error}</Text>
  </Container>
)

FieldError.propTypes = {
  meta: FinalFormPropTypes.meta.isRequired,
  style: ViewPropTypes.style,
}

FieldError.defaultProps = {
  style: {},
}

FieldError.hasError = meta => !!meta.error && (meta.dirty || meta.submitFailed)
FieldError.hasSuccess = meta => meta.dirty && !meta.error

export { FieldError }
