import React from 'react'
import PT from 'prop-types'

import { footstepsImage } from 'images'

import { ViewPropTypes, ImagePropTypes } from 'constants/propTypes'

import { Container, Photo, PhotoPlaceholder } from './styles'

const Avatar = ({ photo, photoUrl, placeholderImage, size, style }) => {
  let photoEl

  if (photoUrl) {
    photoEl = <Photo source={{ uri: photoUrl }} />
  } else if (photo) {
    photoEl = <Photo image={photo} />
  } else {
    photoEl = <PhotoPlaceholder source={placeholderImage} />
  }

  return (
    <Container size={size} style={style}>
      {photoEl}
    </Container>
  )
}

Avatar.propTypes = {
  photo: PT.object,
  photoUrl: PT.string,
  placeholderImage: ImagePropTypes.source,
  size: PT.number,
  style: ViewPropTypes.style,
}

Avatar.defaultProps = {
  photo: null,
  photoUrl: null,
  placeholderImage: footstepsImage,
  size: 96,
  style: {},
}

export { Avatar }
