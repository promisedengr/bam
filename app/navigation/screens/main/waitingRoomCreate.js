import { main } from 'constants/routeNames'

import Screen from 'screens/WaitingRoom/CreateRoom'

export default {
  [main.waitingRoomCreate]: {
    screen: Screen,

    navigationOptions: () => ({
      title: 'Create Waiting Room',
    }),
  },
}
