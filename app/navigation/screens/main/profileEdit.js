import { main } from 'constants/routeNames'

import Screen from 'screens/Profile/Edit'

export default {
  [main.profileEdit]: {
    screen: Screen,

    navigationOptions: () => ({
      title: 'Edit profile',
    }),
  },
}
