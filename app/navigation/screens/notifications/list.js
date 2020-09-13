import { notifications } from 'constants/routeNames'

import Screen from 'screens/Notifications/List'

export default {
  [notifications.list]: {
    screen: Screen,

    navigationOptions: () => ({
      title: 'Notifications',
    }),
  },
}
