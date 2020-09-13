import styled from 'styled-components/native'

import { Box, Text } from 'components/ui'

export const Container = styled(Box).attrs({
  p: 2,
  pr: '10px',
  bg: 'white',
  shadow: 'card',
  activeOpacity: 0.7,
  borderRadius: 4,
})`
  min-width: 48px;
  height: 24px;
  flex-direction: row;
  justify-content: flex-end;
`

export const Count = styled(Text).attrs({
  fontSize: 0,
  color: 'dustyGray',
})``
