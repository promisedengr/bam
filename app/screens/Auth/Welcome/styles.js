import styled from 'styled-components/native'

import { getColor } from 'theme'
import { logoImage, welcomeBackgroundImage } from 'images'

import { Image, ImageBackground, StatusBar as StatusBarUI } from 'components/ui'

export {
  Scrollable,
  Button,
  FormInner,
  FormFooter,
} from 'screens/common/styles'

export const Container = styled(ImageBackground).attrs(props => ({
  source: welcomeBackgroundImage,
  bg: 'zircon',

  imageStyle: {
    opacity: 0.05,
    tintColor: getColor('black')(props),
  },
}))`
  flex: 1;
`

export const StatusBar = styled(StatusBarUI).attrs(props => ({
  backgroundColor: getColor('clear')(props),
  barStyle: 'dark-content',
}))``

export const Logo = styled(Image).attrs({
  source: logoImage,
})``

export const Logos = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`
