import React, { Component } from 'react'
import { Keyboard } from 'react-native'
import PT from 'prop-types'

import noop from 'lodash/noop'

import { COMPOSER_MIN_HEIGHT, COMPOSER_MAX_HEIGHT } from './constants'

import { Container, Composer, SendButtonContainer, SendButton } from './styles'

class MessageInput extends Component {
  state = {
    text: '',
    composerHeight: this.props.minComposerHeight,
  }

  handleInputSizeChange = size => {
    const { minComposerHeight, maxComposerHeight } = this.props

    const newComposerHeight = Math.max(
      minComposerHeight,
      Math.min(maxComposerHeight, size.height),
    )

    this.setState({
      composerHeight: newComposerHeight,
    })
  }

  handleInputTextChange = text => {
    this.setState({ text })
  }

  handleSend = () => {
    const { onSend } = this.props
    const { text } = this.state

    this.setState({ text: '' }, () => {
      Keyboard.dismiss()
      onSend(text)
    })
  }

  render() {
    const {
      minComposerHeight,
      hasAttachment,
      previewAttachmentUrl,
      onAttachmentDrop,
      onAttachmentPick,
    } = this.props
    const { text, composerHeight } = this.state

    return (
      <Container>
        <Composer
          text={text}
          composerHeight={composerHeight}
          minComposerHeight={minComposerHeight}
          hasAttachment={hasAttachment}
          previewAttachmentUrl={previewAttachmentUrl}
          onAttachmentDrop={onAttachmentDrop}
          onAttachmentPick={onAttachmentPick}
          onInputSizeChange={this.handleInputSizeChange}
          onInputTextChange={this.handleInputTextChange}
        />

        <SendButtonContainer>
          <SendButton isDisabled={text === ''} onPress={this.handleSend} />
        </SendButtonContainer>
      </Container>
    )
  }
}

MessageInput.propTypes = {
  hasAttachment: PT.bool,
  maxComposerHeight: PT.number,
  minComposerHeight: PT.number,
  previewAttachmentUrl: PT.string,
  onAttachmentDrop: PT.func,
  onAttachmentPick: PT.func,
  onSend: PT.func.isRequired,
}

MessageInput.defaultProps = {
  hasAttachment: false,
  maxComposerHeight: COMPOSER_MAX_HEIGHT,
  minComposerHeight: COMPOSER_MIN_HEIGHT,
  onAttachmentDrop: noop,
  onAttachmentPick: noop,
  previewAttachmentUrl: null,
}

export { MessageInput }
