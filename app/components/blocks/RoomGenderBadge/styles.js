import styled from 'styled-components/native'

import { gender2color, gender2glyph } from 'utils/waitingRoom'

import { Box, Icon as IconUI } from 'components/ui'

export const Container = styled(Box).attrs(props => ({
  bg: gender2color(props.gender),
  borderRadius: props.size / 2,
}))`
  align-items: center;
  justify-content: center;
`

export const Icon = styled(IconUI).attrs(props => ({
  glyph: gender2glyph(props.gender),
}))``
