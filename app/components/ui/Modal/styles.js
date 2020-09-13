import styled from 'styled-components/native'

import PickingService from 'services/picking'

import { crossIcon } from 'images'
import { getMetrics, getSpace, getColor } from 'theme'

import { StatusBar as StatusBarUI } from '../StatusBar'

import { Box } from '../Box'
import { Text as TextUI } from '../Text'
import { IconButton } from '../IconButton'

export const Container = styled.Modal.attrs({
  animationType: 'none',
  transparent: true,
})``

export const StatusBar = styled(StatusBarUI).attrs(props => ({
  backgroundColor: getColor('overlay')(props),
}))``

export const Overlay = styled.TouchableWithoutFeedback``

export const OverlayBackground = styled(Box).attrs({
  bg: 'overlay',
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const Scrollable = styled.ScrollView.attrs(props => {
  const fourPadding = getSpace(4)(props)

  const contentPadding = PickingService.platform({
    ios: {
      horizontal: fourPadding,
      top: fourPadding + getMetrics('statusBarHeight')(props),
      bottom: fourPadding + getMetrics('bottomSpace')(props),
    },
    android: {
      horizontal: fourPadding,
      top: 0,
      bottom: fourPadding,
    },
  })

  return {
    showsVerticalScrollIndicator: false,

    contentContainerStyle: {
      flex: 1,
      flexGrow: 1,
      justifyContent: 'center',
      paddingHorizontal: contentPadding.horizontal,
      paddingTop: contentPadding.top,
      paddingBottom: contentPadding.bottom,
    },
  }
})`
  flex: 1;
`

export const Body = styled(Box).attrs({
  bg: 'white',
  borderRadius: 1,
})`
  width: 100%;
`

export const Header = styled(Box).attrs({
  p: 4,
})`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

export const CloseButton = styled(IconButton).attrs({
  iconGlyph: crossIcon,
  iconTintColor: 'malibu',
})``

export const Title = styled(TextUI).attrs({
  fontFamilyStyle: 'styles.bold',
  mb: 6,
})`
  text-align: center;
`

export const Content = styled(Box).attrs({
  pb: 6,
  px: 4,
})``

export const TextContent = styled(TextUI).attrs({
  fontSize: 0,
})`
  text-align: ${props => props.align};
`
