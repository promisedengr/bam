const GROUPS = {
  montserrat: 'Montserrat',
}

const STYLES = {
  bold: 'Bold',
  light: 'Light',
  medium: 'Medium',
  regular: 'Regular',
  semiBold: 'SemiBold',
}

export default {
  styles: STYLES,
  groups: GROUPS,

  variants: {
    primary: {
      group: GROUPS.montserrat,
      style: STYLES.regular,
    },

    secondary: {
      group: GROUPS.montserrat,
      style: STYLES.regular,
    },
  },
}
