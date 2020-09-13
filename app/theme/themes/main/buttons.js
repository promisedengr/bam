import { css } from 'styled-components/native'

import { getColor } from '../../rules'

export default {
  container: {
    primary: css`
      ${props => {
        if (props.isDisabled) {
          return css`
            background-color: ${getColor('gallery')};
          `
        }

        if (props.isPressed) {
          return css`
            background-color: ${getColor('deepBlush')};
          `
        }

        return css`
          background-color: ${getColor('pinkSalmon')};
        `
      }}
    `,

    secondary: css`
      ${props => {
        if (props.isDisabled) {
          return css`
            background-color: ${getColor('gallery')};
          `
        }

        if (props.isPressed) {
          return css`
            background-color: ${getColor('danube')};
          `
        }

        return css`
          background-color: ${getColor('malibu')};
        `
      }}
    `,

    tertiary: css`
      ${props => {
        if (props.isDisabled) {
          return css`
            background-color: ${getColor('gallery')};
          `
        }

        if (props.isPressed) {
          return css`
            background-color: ${getColor('puertoRico')};
          `
        }

        return css`
          background-color: ${getColor('aquamarineBlue')};
        `
      }}
    `,

    neutral: css`
      ${props => {
        if (props.isDisabled) {
          return css`
            background-color: ${getColor('gallery')};
          `
        }

        if (props.isPressed) {
          return css`
            background-color: ${getColor('silver')};
          `
        }

        return css`
          background-color: ${getColor('mercury')};
        `
      }}
    `,
  },

  text: {
    neutral: css`
      color: ${getColor('dustyGray')};
    `,

    default: css`
      color: ${getColor('white')};
    `,
  },
}
