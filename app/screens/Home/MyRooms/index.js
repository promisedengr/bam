import React, { Component } from 'react'
import PT from 'prop-types'

import { Container, RoomListItem, Separator } from './styles'

class MyRooms extends Component {
  keyExtractor = o => o.id

  renderRoom = ({ item }) => {
    const { onRoomOpen } = this.props
    return <RoomListItem room={item} onOpen={onRoomOpen} />
  }

  renderSeparator = () => <Separator />

  render() {
    const { rooms } = this.props

    return (
      <Container
        ItemSeparatorComponent={this.renderSeparator}
        data={rooms}
        renderItem={this.renderRoom}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}

MyRooms.propTypes = {
  rooms: PT.array.isRequired,
  onRoomOpen: PT.func.isRequired,
}

export { MyRooms }
