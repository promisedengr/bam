import { main } from 'constants/routeNames'

import Screen from 'screens/Profile/PhoneConfirmation'

export default {
  [main.phoneConfirmation]: {
    screen: Screen,

    navigationOptions: () => ({
      title: 'Confirm your phone',
    }),
  },
}
