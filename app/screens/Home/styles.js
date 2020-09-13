import styled from 'styled-components/native'
import { backgroundColor, space } from 'styled-system'

import { Scrollable } from 'screens/common/styles'

import CreateRoomComponent from './CreateRoom'
import SectionComponent from './Section'

export { MyRooms } from './MyRooms'

export const Container = styled(Scrollable).attrs({
  bg: 'zircon',
})`
  flex: 1;

  ${backgroundColor}
`

export const Section = styled(SectionComponent).attrs(props => ({
  mb: props.isLast ? 0 : 6,
}))`
  ${space}
`

export const CreateRoom = styled(CreateRoomComponent).attrs({
  mb: 4,
})`
  ${space}
`
