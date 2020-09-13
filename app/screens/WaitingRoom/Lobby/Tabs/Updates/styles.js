import styled from 'styled-components/native'

import KeyboardSpacerLibrary from 'react-native-keyboard-spacer'

import { getSpace, getMetrics } from 'theme'

import { Box } from 'components/ui'

export { Container } from 'screens/common/styles'
export { UpdateListItem as ListItem, MessageInput } from 'components/blocks'

export const List = styled.FlatList.attrs(props => ({
  contentContainerStyle: {
    padding: getSpace(5)(props),
    paddingTop: 0,
  },
}))`
  flex: 1;
`

export const Footer = styled(Box).attrs(props => ({
  bg: 'white',
  pt: 4,
  px: 5,
  pb: getSpace(4)(props) + getMetrics('bottomSpace')(props),
}))``

export const KeyboardSpacer = styled(KeyboardSpacerLibrary).attrs(props => ({
  topSpacing: getMetrics('bottomSpace')(props) * -1,
}))``
