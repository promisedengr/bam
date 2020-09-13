import styled from 'styled-components/native'

import { Text as TextUI } from '../Text'

export const Container = styled.View`
  height: 24;
  flex-direction: row;
  align-items: center;
`

export const Text = styled(TextUI).attrs({
  color: 'vividTangerine',
  fontSize: 0,
  lineHeight: 16,
  numberOfLines: 1,
})`
  flex: 1;
`
