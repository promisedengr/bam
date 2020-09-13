import styled from 'styled-components/native'
import { space } from 'styled-system'

import { gender2color } from 'utils/waitingRoom'

import { Box, ImageBackground } from 'components/ui'
import { Panel as PanelComponent } from './Panel'
import { Tabs as TabsComponent } from './Tabs'

export const Container = styled(Box).attrs({
  bg: 'zircon',
})`
  flex: 1;
`

export const Header = styled.View``

export const Avatar = styled(ImageBackground).attrs(props => ({
  bg: gender2color(props.gender),
  contentType: 'l',
}))`
  height: 136px;
  opacity: 0.7;
`

export const Panel = styled(PanelComponent)`
  margin-top: -28px;
`

export const Tabs = styled(TabsComponent).attrs({
  mt: 4,
})`
  ${space}
`
