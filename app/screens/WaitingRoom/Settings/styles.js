import styled from 'styled-components/native'
import { space } from 'styled-system'

import { getSpace } from 'theme'

import { Hr, Text } from 'components/ui'

export { Switch } from 'components/ui'

export {
  Container,
  Scrollable,
  Button,
  FormInner,
  FormContent,
  FormFooter,
} from 'screens/common/styles'

export const Section = styled.View``

export const Meta = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${getSpace(3)};
`

export const SectionTitle = styled(Text).attrs({
  fontSize: 1,
  fontFamilyStyle: 'styles.bold',
  pb: 3,
})``

export const SettingTitle = styled(Text).attrs({
  fontSize: 1,
})`
  flex: 1;
`

export const Separator = styled(Hr).attrs({
  mt: 4,
  mb: 6,
})`
  ${space}
`
