import styled, { css } from 'styled-components/native'

import { mapToTheme } from 'theme'

import { Text as TextUI } from '../Text'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})``

export const Text = styled(TextUI)`
  ${mapToTheme('links.text')}

  ${props =>
    props.isPressed &&
    css`
      text-decoration-line: underline;
    `}
`
