import styled from 'styled-components/native'

import { Box } from '../Box'

import { Image } from '../Image'

export const Container = styled(Box).attrs({
  bg: 'white',
  borderColor: 'pinkSalmon',
})`
  border-width: 4px;
  border-radius: ${props => props.size / 2};
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const Photo = styled(Image).attrs({
  resizeMode: 'cover',
  contentType: 'l',
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const PhotoPlaceholder = Image
