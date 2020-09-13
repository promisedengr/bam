import styled, { css } from 'styled-components/native'

import { getColor } from 'theme'

import { Box } from '../../Box'
import { Text } from '../../Text'

export const Container = styled(Box).attrs(props => ({
  px: 4,
  disabled: props.isDisabled,
}))`
  border-radius: 999;
  align-items: center;
  justify-content: center;
`

export const Label = styled(Text).attrs(props => ({
  color: props.isDisabled ? '' : 'tundora',
}))`
  ${props =>
    props.isDisabled &&
    css`
      color: ${getColor('dustyGray')};
    `}

  ${props =>
    props.isCancel &&
    css`
      color: ${getColor('malibu')};
    `}
`
