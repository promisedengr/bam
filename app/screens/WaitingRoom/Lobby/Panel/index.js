import React from 'react'
import PT from 'prop-types'

import { getRoomExpectedDate } from 'utils/waitingRoom'

import { ViewPropTypes } from 'constants/propTypes'

import { Container, BamButton, ExpectedDate } from './styles'

const Panel = ({ room, style }) => (
  <Container style={style}>
    <BamButton />
    <ExpectedDate>{getRoomExpectedDate(room)}</ExpectedDate>
  </Container>
)

Panel.propTypes = {
  room: PT.object.isRequired,
  style: ViewPropTypes.style,
}

Panel.defaultProps = {
  style: {},
}

export { Panel }
