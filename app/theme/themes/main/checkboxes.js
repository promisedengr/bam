import { css } from 'styled-components/native'

import { getColor } from '../../rules'

export default {
  iconContainer: {
    primary: css`
      ${props => {
        if (props.isDisabled) {
          return css`
            border-color: ${getColor('gallery')};
          `
        }

        if (props.hasError) {
          return css`
            border-color: ${getColor('vividTangerine')};
          `
        }

        if (props.isChecked) {
          return css`
            border-color: ${getColor('pinkSalmon')};
            background-color: ${getColor('pinkSalmon')};
          `
        }

        return css`
          border-color: ${getColor('pinkSalmon')};
        `
      }}
    `,

    secondary: css`
      ${props => {
        if (props.isDisabled) {
          return css`
            border-color: ${getColor('gallery')};
          `
        }

        if (props.hasError) {
          return css`
            border-color: ${getColor('vividTangerine')};
          `
        }

        if (props.isChecked) {
          return css`
            border-color: ${getColor('malibu')};
            background-color: ${getColor('malibu')};
          `
        }

        return css`
          border-color: ${getColor('malibu')};
        `
      }}
    `,

    tertiary: css`
      ${props => {
        if (props.isDisabled) {
          return css`
            border-color: ${getColor('gallery')};
          `
        }

        if (props.hasError) {
          return css`
            border-color: ${getColor('vividTangerine')};
          `
        }

        if (props.isChecked) {
          return css`
            border-color: ${getColor('aquamarineBlue')};
            background-color: ${getColor('aquamarineBlue')};
          `
        }

        return css`
          border-color: ${getColor('aquamarineBlue')};
        `
      }}
    `,
  },
}
