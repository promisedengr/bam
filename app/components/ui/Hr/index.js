import React from 'react'
import PT from 'prop-types'

import { ViewPropTypes } from 'constants/propTypes'

import { Line, Dash } from './styles'

const Hr = ({ isDashed, color, thickness, style }) =>
  isDashed ? (
    <Dash thickness={thickness} color={color} style={style} />
  ) : (
    <Line thickness={thickness} color={color} style={style} />
  )

Hr.propTypes = {
  color: PT.string,
  isDashed: PT.bool,
  style: ViewPropTypes.style,
  thickness: PT.number,
}

Hr.defaultProps = {
  color: 'mercury',
  isDashed: false,
  style: {},
  thickness: 2,
}

export { Hr }
