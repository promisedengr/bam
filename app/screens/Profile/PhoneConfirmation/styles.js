import styled from 'styled-components/native'
import { space } from 'styled-system'

import { phoneVerificationImage } from 'images'

import { Image, Text } from 'components/ui'
import {
  FormContent as FormContentCommon,
  MaskedTextInput as MaskedTextInputCommon,
} from 'screens/common/styles'

export {
  Container,
  Scrollable,
  FormInner,
  FormFooter,
  Button,
} from 'screens/common/styles'

export const FormContent = styled(FormContentCommon).attrs({
  px: 7,
})`
  align-items: center;
  justify-content: center;
`

export const VerificationImage = styled(Image).attrs({
  source: phoneVerificationImage,
  mb: 7,
})`
  ${space}
`

export const MaskedTextInput = styled(MaskedTextInputCommon).attrs({
  mb: 5,
  isCentered: true,
})`
  align-self: stretch;
`

export const Instruction = styled(Text).attrs({
  fontFamilyStyle: 'styles.medium',
})`
  text-align: center;
`
