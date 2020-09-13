import styled from 'styled-components/native'
import { height } from 'styled-system'

import { getMetrics, getColor, getSpace } from 'theme'

import { Box } from '../Box'
import { StatusBar as StatusBarUI } from '../StatusBar'
import { Text } from '../Text'
import { Option as OptionComponent } from './Option'

export const getBottomSpace = (props, isExtra) => {
  const bottomSpace = getMetrics('bottomSpace')(props)
  const contentBottomSpace = bottomSpace > 0 ? 0 : getSpace(4)(props)

  return isExtra ? bottomSpace + contentBottomSpace : contentBottomSpace
}

export const getMaxHeight = props =>
  props.maxHeight || getMetrics('screenHeight')(props) * 0.9

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
`

export const Header = styled(Box).attrs({
  px: 5,
  height: 52,
})`
  justify-content: center;
`

export const HeaderTitle = styled(Text).attrs({
  numberOfLines: 1,
  fontFamilyStyle: 'styles.bold',
})``

export const Modal = styled.Modal.attrs({
  animationType: 'none',
  transparent: true,
})``

export const Overlay = styled.TouchableWithoutFeedback``

export const OverlayBackground = styled(Box).attrs({
  bg: 'black',
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const Body = styled(Box).attrs(props => ({
  pb: getMetrics('bottomSpace')(props),
  bg: 'white',
  borderTopLeftRadius: 2,
  borderTopRightRadius: 2,
}))``

export const Content = styled.ScrollView.attrs(props => ({
  keyboardShouldPersistTaps: 'handled',

  contentContainerStyle: {
    paddingHorizontal: getSpace(5)(props),
    paddingBottom: getBottomSpace(props, false),
  },
}))``

export const Option = styled(OptionComponent).attrs({
  height: 40,
})`
  ${height}
`

export const Separator = styled(Box).attrs({
  mb: 3,
})``

export const StatusBar = styled(StatusBarUI).attrs(props => ({
  backgroundColor: getColor('overlay')(props),
}))``
