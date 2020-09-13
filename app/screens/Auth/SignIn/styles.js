import styled from 'styled-components/native'
import { space } from 'styled-system'

import { Link } from 'components/ui'

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
  mt: 5,
  variant: 'secondary',
  fontFamilyStyle: 'styles.medium',

  textStyle: {
    textAlign: 'center',
  },
})`
  ${space}
`
