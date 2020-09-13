import React, { Component } from 'react'
import PT from 'prop-types'

import { groupRoomsByOwnership } from 'utils/waitingRoom'

import { ReactNavigationPropTypes } from 'constants/propTypes'
import { waitingRoom, main } from 'constants/routeNames'

import { Container, Section, CreateRoom, MyRooms } from './styles'

class Home extends Component {
  handleRoomOpen = room => {
    const { navigation } = this.props

    navigation.navigate({
      routeName: waitingRoom.lobby,
      params: { title: room.name, roomId: room.id },
    })
  }

  handleRoomCreate = () => {
    const { navigation } = this.props
    navigation.navigate({ routeName: main.waitingRoomCreate })
  }

  render() {
    const { viewer } = this.props
    const { myRooms, followedRooms } = groupRoomsByOwnership(
      viewer.roomsParticipating,
    )

    return (
      <Container toBottom>
        <Section title="My Waiting Rooms">
          <CreateRoom onRoomCreate={this.handleRoomCreate} />

          <MyRooms rooms={myRooms} onRoomOpen={this.handleRoomOpen} />
        </Section>

        <Section title="Rooms I follow" isLast>
          <MyRooms rooms={followedRooms} onRoomOpen={this.handleRoomOpen} />
        </Section>
      </Container>
    )
  }
}

Home.propTypes = {
  ...ReactNavigationPropTypes,
  viewer: PT.object.isRequired,
}

export default Home
