import React from 'react'
import PT from 'prop-types'

import { ViewPropTypes } from 'constants/propTypes'

import { Container, Icon } from './styles'

const RoomGenderBadge = ({ room, size, style }) => (
  <Container gender={room.gender} size={size} style={style}>
    <Icon gender={room.gender} />
  </Container>
)

RoomGenderBadge.propTypes = {
  room: PT.object.isRequired,
  size: PT.number,
  style: ViewPropTypes.style,
}

RoomGenderBadge.defaultProps = {
  size: 48,
  style: {},
}

export { RoomGenderBadge }
