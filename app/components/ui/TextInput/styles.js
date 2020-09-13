import styled, { css } from 'styled-components/native'
import {
  fontSize,
  space,
  color,
  borderRadius,
  borderColor,
} from 'styled-system'

import { getColor, fontFamilyComplex } from 'theme'

import { FieldLabel as FieldLabelUI } from '../FieldLabel'

export { FieldBottom } from '../FieldBottom'

export const Container = styled.View``

export const Input = styled.TextInput.attrs(props => ({
  bg: props.isDisabled ? 'gallery' : 'white',
  color: props.isDisabled ? 'silver' : 'tundora',
  selectionColor: getColor('malibu')(props),
  placeholderTextColor: getColor('silver')(props),
  px: 4,
  py: 0,
  borderRadius: 1,
  fontSize: 1,
  fontFamilyGroup: 'groups.montserrat',
  fontFamilyStyle: 'styles.regular',
  editable: !props.isDisabled,
  textAlign: props.isCentered ? 'center' : 'left',
}))`
  height: 40;
  border-width: 1;
  text-align-vertical: center;

  ${props => css`
    border-color: ${getColor(props.isFocused ? 'malibu' : 'dustyGray')(props)};
  `}

  ${props =>
    props.isDisabled &&
    css`
      border-color: ${getColor('silver')(props)};
    `}

  ${props =>
    props.hasError &&
    css`
      border-color: ${getColor('vividTangerine')(props)};
    `}

  ${space}
  ${color}
  ${fontSize}
  ${borderRadius}
  ${borderColor}
  ${fontFamilyComplex}
`

export const FieldLabel = styled(FieldLabelUI).attrs({ mb: 3 })`
  ${space}
`
