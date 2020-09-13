import styled from 'styled-components/native'

import { Box } from '../Box'
import { Icon } from '../Icon'

export const Container = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: 0.6,
  disabled: props.isDisabled,
}))`
  flex-direction: row;
  align-items: center;
`

export const IconContainer = styled(Box).attrs({
  size: 24,
  borderRadius: 1,
  bg: 'transparent',
})`
  align-items: center;
  justify-content: center;
`

export const ToggleIcon = styled(Icon).attrs(props => ({
  glyph: props.isChecked ? props.iconCheckedGlyph : props.iconGlyph,
}))``
