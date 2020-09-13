import { main } from 'constants/routeNames'

import Screen from 'screens/Profile/Show'

export default {
  [main.profileShow]: {
    screen: Screen,

    navigationOptions: () => ({
      title: 'Profile',
    }),
  },
}
