import styled from 'styled-components/native'
import { space } from 'styled-system'

import { Box, Text } from 'components/ui'

import { RoomGenderBadge as RoomGenderBadgeBlock } from '../RoomGenderBadge'

export const Container = styled(Box).attrs({
  p: 5,
  bg: 'white',
  shadow: 'card',
  activeOpacity: 0.7,
})`
  flex-direction: row;
`

export const RoomGenderBadge = styled(RoomGenderBadgeBlock).attrs({
  mr: 4,
})`
  ${space}
`

export const Info = styled.View`
  flex: 1;
  justify-content: center;
`

export const Name = styled(Text).attrs({
  fontFamilyStyle: 'styles.bold',
  numberOfLines: 1,
})``

export const ExpectedDate = styled(Text).attrs({
  fontSize: 0,
  color: 'dustyGray',
  numberOfLines: 1,
})``
