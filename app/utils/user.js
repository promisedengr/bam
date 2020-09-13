import get from 'lodash/get'
import trim from 'lodash/trim'

import { singleSpaces } from './string'

export const userFullName = (user, fallback = 'Incognito') => {
  const fName = get(user, 'profile.firstName')
  const lName = get(user, 'profile.lastName')
  const email = get(user, 'profile.email')

  if (fName && lName) {
    return trim(singleSpaces(`${fName} ${lName}`))
  }

  return email || fallback
}
