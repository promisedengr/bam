import React from 'react'
import styled from 'styled-components/native'

import { hitSlopArea } from 'utils/presentational'

import { waitingRoom } from 'constants/routeNames'

import { getSpace } from 'theme'
import { moreIcon } from 'images'

import { IconButton } from 'components/ui'
import Screen from 'screens/WaitingRoom/Lobby'

const MoreButton = styled(IconButton).attrs(props => ({
  iconGlyph: moreIcon,
  hitSlop: hitSlopArea(getSpace(4)(props)),
}))``

export default {
  [waitingRoom.lobby]: {
    screen: Screen,

    navigationOptions: ({ navigation }) => {
      const handleMorePress = () => {
        navigation.navigate({ routeName: waitingRoom.settings })
      }

      return {
        title: navigation.getParam('title') || 'Waiting room',
        headerRight: <MoreButton onPress={handleMorePress} />, // eslint-disable-line
      }
    },
  },
}
