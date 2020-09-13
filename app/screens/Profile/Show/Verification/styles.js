import styled from 'styled-components/native'

import { checkmarkIcon } from 'images'

import { Box, Text, Icon } from 'components/ui'

export { Button } from 'screens/common/styles'

export const Container = styled.View``

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const StatusText = styled(Text)`
  text-align: center;
`

export const StatusCheckmark = styled(Icon).attrs({
  glyph: checkmarkIcon,
  mr: 3,
})``

export const Buttons = styled(Box).attrs({
  mt: 4,
})``
