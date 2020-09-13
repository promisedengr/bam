import { css } from 'styled-components/native'

import { getColor } from '../../rules'

export default {
  text: {
    primary: css`
      ${props => {
        if (props.isPressed) {
          return css`
            color: ${getColor('pinkSalmon')};
            text-decoration-color: ${getColor('deepBlush')};
          `
        }

        return css`
          color: ${getColor('pinkSalmon')};
        `
      }}
    `,

    secondary: css`
      ${props => {
        if (props.isPressed) {
          return css`
            color: ${getColor('malibu')};
            text-decoration-color: ${getColor('danube')};
          `
        }

        return css`
          color: ${getColor('malibu')};
        `
      }}
    `,

    tertiary: css`
      ${props => {
        if (props.isPressed) {
          return css`
            color: ${getColor('aquamarineBlue')};
            text-decoration-color: ${getColor('puertoRico')};
          `
        }

        return css`
          color: ${getColor('aquamarineBlue')};
        `
      }}
    `,
  },
}
