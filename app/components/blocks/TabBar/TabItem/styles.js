import styled from 'styled-components/native'

import { Box, Text } from 'components/ui'

export const Container = styled(Box).attrs(props => ({
  mr: props.isLast ? 0 : 2,
  borderRadius: 3,
  bg: props.isFocused ? 'pinkSalmon' : 'mercury',
  activeOpacity: 0.7,
}))`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 24px;
`

export const Label = styled(Text).attrs(props => ({
  fontSize: 0,
  fontFamilyStyle: props.isFocused ? 'styles.bold' : 'styles.regular',
  color: props.isFocused ? 'white' : 'silver',
}))``
