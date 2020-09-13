import styled from 'styled-components/native'
import { space } from 'styled-system'

import { Link, Box, Text, Hr } from 'components/ui'

export {
  Container,
  Scrollable,
  FormInner,
  FormContent,
  FormFooter,
  Button,
  TextInput,
} from 'screens/common/styles'

export const LinkButton = styled(Link).attrs({
  variant: 'secondary',
  fontFamilyStyle: 'styles.medium',

  textStyle: {
    textAlign: 'center',
  },
})``

export const Meta = styled(Box).attrs({
  mt: 5,
})`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const HasAccount = styled(Text).attrs(() => ({
  fontFamilyStyle: 'styles.medium',
  mr: 2,
}))``

export const Separator = styled(Hr).attrs({
  my: 6,
})`
  ${space}
`
