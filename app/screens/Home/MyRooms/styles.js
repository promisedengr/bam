import styled from 'styled-components/native'

import { Box } from 'components/ui'

export { RoomListItem } from 'components/blocks'

export const Container = styled.FlatList`
  overflow: visible;
`

export const Separator = styled(Box).attrs({
  mb: 4,
})``
