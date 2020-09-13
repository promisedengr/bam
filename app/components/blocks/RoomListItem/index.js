import React, { PureComponent } from 'react'
import { TouchableOpacity } from 'react-native'
import PT from 'prop-types'

import { getRoomExpectedDate } from 'utils/waitingRoom'

import { Container, RoomGenderBadge, Info, Name, ExpectedDate } from './styles'

class RoomListItem extends PureComponent {
  handlePress = () => {
    const { room, onOpen } = this.props
    onOpen(room)
  }

  render() {
    const { room } = this.props

    return (
      <Container as={TouchableOpacity} onPress={this.handlePress}>
        <RoomGenderBadge room={room} />

        <Info>
          <Name>{room.name}</Name>
          <ExpectedDate>{getRoomExpectedDate(room)}</ExpectedDate>
        </Info>
      </Container>
    )
  }
}

RoomListItem.propTypes = {
  room: PT.object.isRequired,
  onOpen: PT.func.isRequired,
}

export { RoomListItem }
