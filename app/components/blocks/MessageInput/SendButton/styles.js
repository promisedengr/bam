import styled from 'styled-components/native'

import { paperPlaneIcon } from 'images'

import { Box, Icon as IconUI } from 'components/ui'

export const Container = styled(Box).attrs(props => ({
  bg: props.isDisabled ? 'dustyGray' : 'pinkSalmon',
  btrr: 4,
  bbrr: 4,
  activeOpacity: 0.7,
  disabled: props.isDisabled,
}))`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 48px;
`

export const Icon = styled(IconUI).attrs({
  glyph: paperPlaneIcon,
  tintColor: 'white',
})``
