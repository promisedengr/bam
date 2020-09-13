import { createActions } from 'reduxsauce'

export const {
  Types: PushNotificationsTypes,
  Creators: PushNotificationsCreators,
} = createActions(
  {
    registerDeviceRequest: ['pushListenerId', 'userId'],
    registerDeviceSuccess: ['response'],
    registerDeviceFailure: ['response'],

    removeDeviceRequest: ['deviceId'],
    removeDeviceSuccess: ['response'],
    removeDeviceFailure: ['response'],

    receivePushListener: ['pushListener'],
    setStatus: ['status'],
  },
  {
    prefix: 'PushNotifications/',
  },
)
