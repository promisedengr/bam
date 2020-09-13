import React, { Component } from 'react'
import PT from 'prop-types'

import noop from 'lodash/noop'

import PhotoService from 'services/photo'

import { Container } from './styles'

const OPTION_IDS = {
  cancel: 'Cancel',
  takePhoto: 'TakePhoto',
  uploadPhoto: 'UploadPhoto',
}

class PhotoUploadActions extends Component {
  getSheetProps = () => ({
    options: [
      { id: OPTION_IDS.takePhoto, label: 'Take photo' },
      { id: OPTION_IDS.uploadPhoto, label: 'Upload photo' },
      { id: OPTION_IDS.cancel, label: 'Cancel' },
    ],
    cancelButtonIndex: 2,
  })

  takePhoto = () => {
    const { onPhotoPick } = this.props

    PhotoService.launchCamera(null, response => {
      if (response.uri) {
        onPhotoPick({
          imageFile: PhotoService.file2Attachment(response),
          imageData: response.uri,
        })
      }
    })
  }

  uploadPhoto = () => {
    const { onPhotoPick } = this.props

    PhotoService.launchImageLibrary(null, response => {
      if (response.uri) {
        onPhotoPick({
          imageFile: PhotoService.file2Attachment(response),
          imageData: response.uri,
        })
      }
    })
  }

  handlePress = option => {
    switch (option.id) {
      case OPTION_IDS.takePhoto:
        return this.takePhoto()
      case OPTION_IDS.uploadPhoto:
        return this.uploadPhoto()
      default:
        return null
    }
  }

  handleSelect = () => {}

  render() {
    const { innerRef } = this.props

    return (
      <Container
        {...this.getSheetProps()}
        ref={innerRef}
        title="Add photo"
        onPress={this.handlePress}
        onSelect={this.handleSelect}
      />
    )
  }
}

PhotoUploadActions.propTypes = {
  innerRef: PT.func,
  onPhotoPick: PT.func.isRequired,
}

PhotoUploadActions.defaultProps = {
  innerRef: noop,
}

export { PhotoUploadActions }
