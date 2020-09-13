import Secrets from 'react-native-config'

const webProtocol = 'https'
const webSocketsProtocol = __DEV__ ? 'ws' : 'wss'

const api = {
  webUrl: `${webProtocol}://${Secrets.API_URL}`,
  webSocketsUrl: `${webSocketsProtocol}://${Secrets.API_URL}`,
}

const oneSignal = {
  appId: Secrets.ONESIGNAL_APPLICATION_IDENTIFIER,
}

const pusher = {
  token: Secrets.PUSHER_TOKEN,
  config: {
    cluster: 'us2',
    forceTLS: true,
    encrypted: true,
  },
}

export default {
  api,
  oneSignal,
  pusher,
}
