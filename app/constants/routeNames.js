import { createNames } from 'utils/navigation'

export const navigators = createNames(['app', 'auth', 'main', 'waitingRoom'], {
  prefix: 'navigators/',
})

export const app = createNames(['redirector', 'progress'], {
  prefix: 'app/',
})

export const auth = createNames(
  [
    'welcome',
    'signIn',
    'signUp',
    'verification',
    'forgotPassword',
    'passwordChanged',
  ],
  {
    prefix: 'auth/',
  },
)

export const main = createNames(
  [
    'home',
    'phoneConfirmation',
    'profileEdit',
    'profileShow',
    'waitingRoomCreate',
  ],
  {
    prefix: 'main/',
  },
)

export const waitingRoom = createNames(['lobby', 'settings'], {
  prefix: 'waitingRoom/',
})

export const notifications = createNames(['list'], {
  prefix: 'notifications/',
})
