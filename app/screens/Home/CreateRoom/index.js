import React from 'react'
import PT from 'prop-types'
import { ReactNavigationPropTypes } from 'constants/propTypes'

import { Container, Button } from './styles'

const CreateRoom = ({ style, onRoomCreate }) => (
  <Container style={style}>
    <Button
      title="Create Waiting Room"
      variant="tertiary"
      onPress={onRoomCreate}
    />
  </Container>
)

CreateRoom.propTypes = {
  ...ReactNavigationPropTypes,
  onRoomCreate: PT.func.isRequired,
}

export default CreateRoom
