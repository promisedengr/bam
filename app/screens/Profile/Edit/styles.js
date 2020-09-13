import styled from 'styled-components/native'
import { space } from 'styled-system'

import { bellIcon, bellOffIcon, profileImage } from 'images'

import { AvatarPicker as AvatarPickerBlock } from 'components/blocks'
import { Box, Hr, Text, ToggleButton } from 'components/ui'

export {
  Container,
  Scrollable,
  FormInner,
  FormContent,
  FormFooter,
  TextInput,
  Button,
  MaskedTextInput,
} from 'screens/common/styles'

export const AvatarPicker = styled(AvatarPickerBlock).attrs({
  mt: 4,
  mb: 5,
  placeholderImage: profileImage,
})`
  ${space}
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
  line-height: 40;
`

export const RowValue = styled.View`
  flex: 0.7;
`

export const ToggleBellButton = styled(ToggleButton).attrs({
  ml: 5,
  isCustomIcon: true,
  iconGlyph: bellOffIcon,
  iconCheckedGlyph: bellIcon,
})`
  ${space}
`

export const OldValue = styled.View`
  flex: 1;
`
