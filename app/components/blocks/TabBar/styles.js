import styled from 'styled-components/native'

import { Box } from 'components/ui'

export { TabItem } from './TabItem'

export const Container = styled(Box).attrs({
  p: 2,
  bg: 'white',
  borderRadius: 4,
})`
  flex-direction: row;
`
