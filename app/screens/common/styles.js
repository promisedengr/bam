import styled from 'styled-components/native'
import { space } from 'styled-system'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import merge from 'lodash/merge'

import { getMetrics, getSpace } from 'theme'

import {
  Box,
  Button as ButtonUI,
  Dropdown as DropdownUI,
  TextInput as TextInputUI,
  Datepicker as DatepickerUI,
  MaskedTextInput as MaskedTextInputUI,
} from 'components/ui'

export const Container = styled(Box).attrs({
  bg: 'zircon',
})`
  flex: 1;
`

export const Scrollable = styled(KeyboardAwareScrollView).attrs(props => {
  const bSpace = getMetrics('bottomSpace')(props)
  const tSpace = getMetrics('statusBarUnsafeHeight')(props)
  const iSpace = getSpace(5)(props)
  const eSpace = getSpace(1)(props)

  return merge(
    {
      keyboardShouldPersistTaps: 'handled',
      extraScrollHeight: eSpace,

      contentContainerStyle: {
        flexGrow: 1,
        padding: iSpace,
      },
    },
    // NOTE: Here we mimic "contentInsetAdjustmentBehavior: 'automatic'"
    //       behaviour and still stay no headache
    props.fromTop && {
      scrollIndicatorInsets: {
        top: tSpace,
      },
    },
    props.toBottom && {
      scrollIndicatorInsets: {
        bottom: bSpace,
      },
      contentContainerStyle: {
        paddingBottom: iSpace + bSpace,
      },
    },
  )
})`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
`

export const Footer = styled(Box).attrs(props => ({
  mt: props.withoutSpace ? 0 : 4,
}))``

export const FormInner = styled.View`
  flex: 1;
`

export const FormContent = styled(Box)`
  flex: 1;
`

export const FormFooter = styled(Box).attrs(props => ({
  mt: props.withoutSpace ? 0 : 4,
}))``

export const TextInput = styled(TextInputUI).attrs(props => ({
  mb: props.isLast ? 0 : 4,
}))`
  ${space}
`

export const MaskedTextInput = styled(MaskedTextInputUI).attrs(props => ({
  mb: props.isLast ? 0 : 4,
}))`
  ${space}
`

export const Dropdown = styled(DropdownUI).attrs(props => ({
  mb: props.isLast ? 0 : 4,
}))`
  ${space}
`

export const Datepicker = styled(DatepickerUI).attrs(props => ({
  mb: props.isLast ? 0 : 4,
}))`
  ${space}
`

export const Button = styled(ButtonUI).attrs(props => ({
  mb: props.isLast ? 0 : 4,
}))`
  ${space}
`
