import styled, { css } from 'styled-components/native'

import { mapToTheme } from 'theme'

import { Box } from '../Box'
import { Text as TextUI } from '../Text'

export const Touchable = styled.TouchableWithoutFeedback``

export const Container = styled(Box).attrs(props => ({
  shadow: props.isPressed ? 'button' : null,
}))`
  height: 40px;
  border-radius: 20px;
  min-width: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${mapToTheme('buttons.container')}

  ${props =>
    props.isOutlined &&
    css`
      border-width: 1;
    `}

  ${props =>
    props.scale === 'bam' &&
    css`
      height: 56px;
      border-radius: 28px;
      min-width: 56px;
    `}
`

export const Text = styled(TextUI).attrs(props => ({
  px: 5,
  fontFamilyStyle: props.scale === 'bam' ? 'styles.bold' : 'styles.semiBold',
}))`
  flex-grow: 1;

  ${mapToTheme('buttons.text')}

  ${props =>
    props.isCentered &&
    css`
      text-align: center;
    `}
`
