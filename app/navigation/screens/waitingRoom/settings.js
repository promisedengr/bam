import { waitingRoom } from 'constants/routeNames'

import Screen from 'screens/WaitingRoom/Settings'

export default {
  [waitingRoom.settings]: {
    screen: Screen,

    navigationOptions: {
      title: 'Settings',
    },
  },
}
