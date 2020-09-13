import styled, { css } from 'styled-components/native'

import { mapToTheme } from 'theme'
import { checkIcon } from 'images'

import { Box } from '../Box'
import { Icon as IconUI } from '../Icon'
import { Text as TextUI } from '../Text'

export const Container = styled.TouchableOpacity.attrs(props => ({
  activeOpacity: 0.6,
  disabled: props.isDisabled,
}))`
  flex-direction: row;
  align-items: center;
`

export const IconContainer = styled(Box).attrs(props => ({
  size: 24,
  borderWidth: props.isChecked ? 0 : 2,
  borderRadius: 1,
  bg: 'white',
}))`
  align-items: center;
  justify-content: center;

  ${mapToTheme('checkboxes.iconContainer')};
`

export const Icon = styled(IconUI).attrs({
  glyph: checkIcon,
  tintColor: 'white',
})`
  opacity: 0;

  ${props =>
    props.isChecked &&
    css`
      opacity: 1;
    `}
`

export const Label = styled(TextUI).attrs({
  ml: 3,
})``
