import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import PT from 'prop-types'

import {
  Container,
  Input,
  AttachmentButton,
  PhotoUploadActions,
  Attachment,
  AttachmentImage,
  AttachmentDeleteIconContainer,
  AttachmentDeleteIcon,
} from './styles'

class Composer extends Component {
  storeActionsRef = ref => {
    this.actionsRef = ref
  }

  handleContentSizeChange = event => {
    const { onInputSizeChange } = this.props
    const { contentSize } = event.nativeEvent

    // Support earlier versions of React Native on Android.
    if (!contentSize) return

    if (!this.contentSize || this.contentSize.height !== contentSize.height) {
      this.contentSize = contentSize
      onInputSizeChange(this.contentSize)
    }
  }

  handleTextChange = text => {
    const { onInputTextChange } = this.props
    onInputTextChange(text)
  }

  handleAttachmentPress = () => {
    this.actionsRef.show()
  }

  render() {
    const {
      text,
      composerHeight,
      minComposerHeight,
      placeholder,
      hasAttachment,
      previewAttachmentUrl,
      onAttachmentPick,
      onAttachmentDrop,
    } = this.props

    const attachmentButtonEl = hasAttachment && (
      <AttachmentButton onPress={this.handleAttachmentPress} />
    )

    const attachmentEl = previewAttachmentUrl && (
      <Attachment as={TouchableOpacity} onPress={onAttachmentDrop}>
        <AttachmentImage source={{ uri: previewAttachmentUrl }} />

        <AttachmentDeleteIconContainer>
          <AttachmentDeleteIcon />
        </AttachmentDeleteIconContainer>
      </Attachment>
    )

    return (
      <Container>
        {attachmentButtonEl}
        {attachmentEl}

        <Input
          value={text}
          height={composerHeight}
          placeholder={placeholder}
          isSingleLined={composerHeight === minComposerHeight}
          hasAttachment={hasAttachment}
          onChangeText={this.handleTextChange}
          onContentSizeChange={this.handleContentSizeChange}
        />

        <PhotoUploadActions
          innerRef={this.storeActionsRef}
          onPhotoPick={onAttachmentPick}
        />
      </Container>
    )
  }
}

Composer.propTypes = {
  composerHeight: PT.number.isRequired,
  hasAttachment: PT.bool.isRequired,
  minComposerHeight: PT.number.isRequired,
  placeholder: PT.string,
  previewAttachmentUrl: PT.string,
  text: PT.string.isRequired,
  onAttachmentDrop: PT.func.isRequired,
  onAttachmentPick: PT.func.isRequired,
  onInputSizeChange: PT.func.isRequired,
  onInputTextChange: PT.func.isRequired,
}

Composer.defaultProps = {
  placeholder: 'Write something…',
  previewAttachmentUrl: null,
}

export { Composer }
