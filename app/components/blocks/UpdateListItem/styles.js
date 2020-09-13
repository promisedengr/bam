import styled from 'styled-components/native'
import { space } from 'styled-system'

import { hitSlopArea } from 'utils/presentational'

import { getSpace } from 'theme'
import { threeDotsHorizontalIcon } from 'images'

import {
  Box,
  Text,
  IconButton,
  Image as ImageUI,
  Avatar as AvatarUI,
} from 'components/ui'
import { DayLine as DayLineBlock } from '../DayLine'
import { ReactionBar as ReactionBarBlock } from '../ReactionBar'

export { UpdateActions } from '../UpdateActions'

export const Container = styled.View``

export const Content = styled(Box).attrs({
  p: 12, // NOTE: Custom space
  bg: 'white',
  shadow: 'card',
})``

export const Header = styled(Box)`
  flex-direction: row;
  align-items: center;
`

export const Name = styled(Text).attrs({
  fontSize: 0,
  fontFamilyStyle: 'styles.bold',
  numberOfLines: 1,
  ml: 3,
})`
  flex: 1;
`

export const Time = styled(Text).attrs({
  color: 'pinkSalmon',
  fontSize: 0,
  ml: 4,
})``

export const Image = styled(ImageUI).attrs({
  mt: 3,
  contentType: 'l',
})`
  height: 123;
`

export const Description = styled(Text).attrs({
  fontSize: 0,
  color: 'dustyGray',
  mt: 3,
})``

export const Avatar = styled(AvatarUI).attrs({
  size: 24,
})``

export const ActionsButton = styled(IconButton).attrs(props => ({
  iconGlyph: threeDotsHorizontalIcon,
  iconTintColor: 'silver',
  ml: 4,
  hitSlop: hitSlopArea(getSpace(3)(props)),
}))`
  ${space}
`

export const DayLine = styled(DayLineBlock).attrs({
  my: 3,
})`
  ${space}
`

export const DayLineSpacer = styled(Box)`
  height: 12px;
`

export const ReactionBar = styled(ReactionBarBlock).attrs({
  mt: 3,
})`
  ${space}
`
