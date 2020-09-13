import React from 'react'

import { createStackNavigator } from 'react-navigation'
import { fromRight } from 'react-navigation-transitions'

import PickingService from 'services/picking'

import { gender2color } from 'utils/waitingRoom'

import { navigators, waitingRoom } from 'constants/routeNames'

import { Main as Header } from 'components/headers'

import lobby from 'navigation/screens/waitingRoom/lobby'
import settings from 'navigation/screens/waitingRoom/settings'

const SCREENS = {
  ...lobby,
  ...settings,
}

const CONFIG = {
  initialRouteName: waitingRoom.lobby,

  headerMode: 'screen',
  cardShadowEnabled: false,

  transitionConfig: () =>
    PickingService.platformLazy({
      android: () => fromRight(),
    }),

  defaultNavigationOptions: {
    header: props => <Header {...props} bg={gender2color('female')} withBack />,
  },
}

const WaitingRoomNavigator = createStackNavigator(SCREENS, CONFIG)

export const screen = {
  [navigators.waitingRoom]: {
    screen: WaitingRoomNavigator,

    navigationOptions: {
      header: null,
    },
  },
}

export default WaitingRoomNavigator
