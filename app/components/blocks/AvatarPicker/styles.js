import styled from 'styled-components/native'
import { space } from 'styled-system'

import { Link as LinkUI, Avatar as AvatarUI } from 'components/ui'

export { PhotoUploadActions } from '../PhotoUploadActions'
export { Button } from 'components/ui'

export const Container = styled.View`
  align-items: center;
`

export const Avatar = styled(AvatarUI).attrs({
  mb: 3,
})`
  ${space}
`

export const Link = styled(LinkUI).attrs({
  mr: 2,
})`
  ${space}
`
