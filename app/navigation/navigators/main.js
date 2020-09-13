import React from 'react'
import { createStackNavigator } from 'react-navigation'

import { fromRight } from 'react-navigation-transitions'

import PickingService from 'services/picking'

import { navigators, main } from 'constants/routeNames'

import { Main as Header } from 'components/headers'

import home from 'navigation/screens/main/home'
import phoneConfirmation from 'navigation/screens/main/phoneConfirmation'
import profileEdit from 'navigation/screens/main/profileEdit'
import profileShow from 'navigation/screens/main/profileShow'
import waitingRoomCreate from 'navigation/screens/main/waitingRoomCreate'

import { screen as waitingRoom } from './waitingRoom'

const SCREENS = {
  ...home,
  ...phoneConfirmation,
  ...profileEdit,
  ...profileShow,
  ...waitingRoom,
  ...waitingRoomCreate,
}

const CONFIG = {
  initialRouteName: main.home,

  headerMode: 'screen',
  cardShadowEnabled: false,

  transitionConfig: () =>
    PickingService.platformLazy({
      android: () => fromRight(),
    }),

  defaultNavigationOptions: {
    header: props => <Header {...props} />,
  },
}

const MainNavigator = createStackNavigator(SCREENS, CONFIG)

export const screen = {
  [navigators.main]: {
    screen: MainNavigator,
  },
}

export default MainNavigator
