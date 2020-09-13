import React, { Component } from 'react'
import PT from 'prop-types'

import { footstepsImage } from 'images'

import { ViewPropTypes, ImagePropTypes } from 'constants/propTypes'

import { Container, Avatar, Link, PhotoUploadActions } from './styles'

class AvatarPicker extends Component {
  handleLinkPress = () => {
    this.actionsRef.show()
  }

  storeActionsRef = ref => {
    this.actionsRef = ref
  }

  renderLink() {
    const { photo, previewPhotoUrl } = this.props

    return (
      <Link onPress={this.handleLinkPress}>
        + {photo || previewPhotoUrl ? 'Change photo' : 'Add photo'}
      </Link>
    )
  }

  render() {
    const {
      photo,
      previewPhotoUrl,
      placeholderImage,
      style,
      onPhotoPick,
    } = this.props

    return (
      <Container style={style}>
        <Avatar
          photo={photo}
          photoUrl={previewPhotoUrl}
          placeholderImage={placeholderImage}
        />

        {this.renderLink()}

        <PhotoUploadActions
          innerRef={this.storeActionsRef}
          onPhotoPick={onPhotoPick}
        />
      </Container>
    )
  }
}

AvatarPicker.propTypes = {
  photo: PT.object,
  placeholderImage: ImagePropTypes.source,
  previewPhotoUrl: PT.string,
  style: ViewPropTypes.style,
  onPhotoPick: PT.func.isRequired,
}

AvatarPicker.defaultProps = {
  photo: null,
  placeholderImage: footstepsImage,
  previewPhotoUrl: null,
  style: {},
}

export { AvatarPicker }
