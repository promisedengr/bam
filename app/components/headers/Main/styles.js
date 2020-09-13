import styled from 'styled-components/native'

import { hitSlopArea } from 'utils/presentational'

import { getMetrics, getColor, getSpace, getLineHeight } from 'theme'
import { symbolsImage, arrow2Icon } from 'images'

import {
  Box,
  Text,
  Image,
  IconButton,
  StatusBar as StatusBarUI,
} from 'components/ui'

export const Container = styled(Box)`
  overflow: hidden;
`

export const Background = styled(Image).attrs({
  source: symbolsImage,
  resizeMode: 'cover',
  tintColor: 'white',
})`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  opacity: 0.12;
`

export const StatusBar = styled(StatusBarUI).attrs(props => ({
  backgroundColor: getColor('clear')(props),
}))``

export const Content = styled(Box).attrs(props => ({
  mt: getMetrics('statusBarHeight')(props),
  py: 4,
  px: 5,
}))`
  height: ${getMetrics('mainHeaderHeight')};
  justify-content: flex-end;
`

export const InnerContent = styled.View`
  flex-direction: row;
`

export const Title = styled(Text).attrs({
  fontSize: 2,
  fontFamilyStyle: 'styles.bold',
  numberOfLines: 1,
  color: 'white',
})`
  flex: 1;
`

export const Left = styled(Box).attrs({
  mr: 4,
})`
  height: ${getLineHeight(2)};
  align-items: center;
  justify-content: center;
`

export const Right = styled(Box).attrs({
  ml: 4,
})`
  height: ${getLineHeight(2)};
  align-items: center;
  justify-content: center;
`

export const Back = styled(IconButton).attrs(props => ({
  iconGlyph: arrow2Icon,
  iconTintColor: 'white',
  hitSlop: hitSlopArea(getSpace(4)(props)),
}))``
