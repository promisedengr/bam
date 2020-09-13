import auth from './auth'
import profile from './profile'
import uploader from './uploader'
import viewer from './viewer'
import waitingRooms from './waitingRooms'

export default apiCall => ({
  auth: auth(apiCall),
  profile: profile(apiCall),
  uploader: uploader(apiCall),
  viewer: viewer(apiCall),
  waitingRooms: waitingRooms(apiCall),
})
