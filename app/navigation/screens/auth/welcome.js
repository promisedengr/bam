import { auth } from 'constants/routeNames'

import Screen from 'screens/Auth/Welcome'

export default {
  [auth.welcome]: {
    screen: Screen,

    navigationOptions: {
      header: null,
    },
  },
}
