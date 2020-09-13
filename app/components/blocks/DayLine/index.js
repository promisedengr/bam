import React from 'react'
import PT from 'prop-types'

import { ViewPropTypes } from 'constants/propTypes'

import { Container, Line, DayText } from './styles'

const DayLine = ({ day, style }) => (
  <Container style={style}>
    <Line />
    <DayText>{day}</DayText>
    <Line />
  </Container>
)

DayLine.propTypes = {
  day: PT.string.isRequired,
  style: ViewPropTypes.style,
}

DayLine.defaultProps = {
  style: {},
}

export { DayLine }
