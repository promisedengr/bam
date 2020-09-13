import styled from 'styled-components/native'
import { space } from 'styled-system'

import { Reaction as ReactionComponent } from './Reaction'

export const Container = styled.View`
  flex-direction: row;
`

export const Reaction = styled(ReactionComponent).attrs(props => ({
  mr: props.isLast ? 0 : 3,
}))`
  ${space}
`
