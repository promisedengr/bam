import styled from 'styled-components/native'
import { space } from 'styled-system'

import { AvatarPicker as AvatarPickerBlock } from 'components/blocks'
import { Hr } from 'components/ui'

export { Button } from 'components/ui'

export {
  Container,
  Scrollable,
  FormInner,
  FormContent,
  FormFooter,
  TextInput,
  Dropdown,
  Datepicker,
} from 'screens/common/styles'

export const AvatarPicker = styled(AvatarPickerBlock).attrs({
  mt: 4,
  mb: 5,
})`
  ${space}
`

export const Separator = styled(Hr).attrs({
  my: 6,
})`
  ${space}
`
