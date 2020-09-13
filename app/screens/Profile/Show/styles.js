import styled from 'styled-components/native'
import { space } from 'styled-system'

import { profileImage } from 'images'

import { Hr, Box, Text, Avatar as AvatarUI } from 'components/ui'

export {
  Container,
  Scrollable,
  Content,
  Footer,
  Button,
} from 'screens/common/styles'
export { Verification } from './Verification'

export const Header = styled(Box).attrs({
  pt: 4,
})`
  align-items: center;
`

export const Avatar = styled(AvatarUI).attrs({
  mb: 5,
  placeholderImage: profileImage,
})`
  ${space}
`

export const FullName = styled(Text).attrs({
  fontSize: 2,
  fontFamilyStyle: 'styles.bold',
})`
  text-align: center;
`

export const Separator = styled(Hr).attrs({
  my: 6,
})`
  ${space}
`

export const Row = styled(Box).attrs(props => ({
  mb: props.isLast ? 0 : 4,
}))`
  flex-direction: row;
`

export const RowLabel = styled(Text).attrs({
  fontFamilyStyle: 'styles.bold',
  numberOfLines: 1,
})`
  flex: 0.3;
`

export const RowValue = styled(Text).attrs({
  numberOfLines: 1,
})`
  flex: 0.7;
`
