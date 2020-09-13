import styled from 'styled-components/native'
import { backgroundColor, height } from 'styled-system'

import DashRN from 'react-native-dash'

import { getColor } from 'theme'

export const Line = styled.View.attrs(props => ({
  bg: props.color,
  height: props.thickness,
}))`
  ${backgroundColor}
  ${height}
`

export const Dash = styled(DashRN).attrs(props => ({
  dashColor: getColor(props.color)(props),
  dashThickness: props.thickness,
}))``

// dashed ? (
//   <Dash dashColor={color} style={[style, { height }]} />
// ) : (
//   <View style={[style, { height, backgroundColor: color }]} />
// )
