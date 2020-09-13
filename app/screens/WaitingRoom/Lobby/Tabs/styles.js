import styled from 'styled-components/native'
import { space } from 'styled-system'

import { TabView } from 'react-native-tab-view'

import { TabBar as TabBarBlock } from 'components/blocks'

export { BabyTalk } from './BabyTalk'
export { Extras } from './Extras'
export { Updates } from './Updates'

export const Container = TabView

export const TabBar = styled(TabBarBlock).attrs({
  mx: 5,
})`
  ${space}
`
