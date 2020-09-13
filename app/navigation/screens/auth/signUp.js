import { auth } from 'constants/routeNames'

import Screen from 'screens/Auth/SignUp'

export default {
  [auth.signUp]: {
    screen: Screen,

    navigationOptions: () => ({
      title: 'Create an account',
    }),
  },
}
