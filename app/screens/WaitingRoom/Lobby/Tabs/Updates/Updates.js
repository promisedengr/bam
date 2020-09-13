import React, { Component } from 'react'
import PT from 'prop-types'

import PickingService from 'services/picking'

import orderBy from 'lodash/orderBy'

import {
  Container,
  List,
  ListItem,
  Footer,
  MessageInput,
  KeyboardSpacer,
} from './styles'

const getInitialState = () => ({
  imageFile: null,
  imageData: null,
})

class Updates extends Component {
  state = getInitialState()

  keyExtractor = o => o.id

  getData = () => {
    const { room } = this.props
    return orderBy(room.waitingRoomUpdates, 'createdAt', 'desc')
  }

  handleSend = text => {
    const { room, onCreate } = this.props
    const { imageFile } = this.state

    this.setState(getInitialState, () => {
      onCreate(room.id, text, imageFile)
    })
  }

  handleAttachmentDrop = () => {
    this.setState(getInitialState)
  }

  handleAttachmentPick = ({ imageFile, imageData }) => {
    this.setState({ imageFile, imageData })
  }

  renderListItem = list => ({ item, index }) => {
    const prevUpdate = list[index + 1] || {}
    const nextUpdate = list[index - 1] || {}

    const listItemProps = {
      prevUpdate,
      nextUpdate,
      update: item,
    }

    return <ListItem {...listItemProps} />
  }

  render() {
    const { imageData } = this.state

    const data = this.getData()

    const spacerEl = PickingService.platformLazy({
      ios: () => <KeyboardSpacer />,
    })

    return (
      <Container>
        <List
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderListItem(data)}
        />

        <Footer>
          <MessageInput
            hasAttachment
            previewAttachmentUrl={imageData}
            onAttachmentDrop={this.handleAttachmentDrop}
            onAttachmentPick={this.handleAttachmentPick}
            onSend={this.handleSend}
          />
        </Footer>

        {spacerEl}
      </Container>
    )
  }
}

Updates.propTypes = {
  room: PT.object.isRequired,
  viewer: PT.object.isRequired,
  onCreate: PT.func.isRequired,
}

export { Updates }
