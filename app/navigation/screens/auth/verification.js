import { auth } from 'constants/routeNames'

import Screen from 'screens/Auth/Verification'

export default {
  [auth.verification]: {
    screen: Screen,

    navigationOptions: () => ({
      title: 'Verification',
    }),
  },
}
