import React, { PureComponent } from 'react'
import PT from 'prop-types'

import { isSameDay } from 'utils/date'
import { userFullName } from 'utils/user'
import { getRoomUpdateDay, getRoomUpdateTime } from 'utils/waitingRoom'

import {
  Container,
  Content,
  Header,
  Name,
  Time,
  Image,
  Description,
  Avatar,
  ActionsButton,
  UpdateActions,
  DayLine,
  DayLineSpacer,
  ReactionBar,
} from './styles'

class UpdateListItem extends PureComponent {
  storeActionsRef = ref => {
    this.actionsRef = ref
  }

  handleActionsPress = () => {
    this.actionsRef.show()
  }

  renderDay = () => {
    const { update, nextUpdate } = this.props

    if (isSameDay(update.createdAt, nextUpdate.createdAt)) {
      return <DayLineSpacer />
    }

    return <DayLine day={getRoomUpdateDay(update)} />
  }

  render() {
    const { update } = this.props

    const imageEl = update.image && <Image image={update.image} />

    return (
      <Container>
        {this.renderDay()}

        <Content>
          <Header>
            <Avatar photo={update.createdBy.profile.avatar} />
            <Name>{userFullName(update.createdBy)}</Name>
            <Time>{getRoomUpdateTime(update)}</Time>
            <ActionsButton onPress={this.handleActionsPress} />
          </Header>

          {imageEl}

          <Description>{update.description}</Description>

          <ReactionBar />

          <UpdateActions update={update} innerRef={this.storeActionsRef} />
        </Content>
      </Container>
    )
  }
}

UpdateListItem.propTypes = {
  nextUpdate: PT.object.isRequired,
  update: PT.object.isRequired,
}

export { UpdateListItem }
