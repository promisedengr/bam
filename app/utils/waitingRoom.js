import { DateTime } from 'luxon'

import get from 'lodash/get'
import transform from 'lodash/transform'

import { getDateDateTime } from 'utils/date'

import { FORMATS } from 'constants/date'
import {
  COLOR_BY_GENDER,
  GLYPH_BY_GENDER,
  PARTICIPANT_ROLES,
} from 'constants/waitingRoom'

export const gender2color = gender => get(COLOR_BY_GENDER, gender)
export const gender2glyph = gender => get(GLYPH_BY_GENDER, gender)

export const getRoomRemainingDays = room => {
  const remainingDuration = DateTime.fromISO(room.expectedDate).diffNow('days')
  const remainingDays = remainingDuration.days

  return parseInt(remainingDays, 10)
}

export const getRoomExpectedDate = room => {
  const remainingDays = getRoomRemainingDays(room)

  return remainingDays > 0
    ? `Arriving in ${remainingDays} days`
    : 'Baby arrived'
}

export const getRoomUpdateTime = update =>
  getDateDateTime({ date: update.createdAt }).toFormat(FORMATS.timeSimple)

export const getRoomUpdateDay = update => {
  const nowDT = getDateDateTime()
  const yesterdayDT = nowDT.minus({ day: 1 })
  const createdDT = getDateDateTime({ date: update.createdAt })

  if (createdDT.hasSame(nowDT, 'day')) {
    return 'Today'
  }

  if (createdDT.hasSame(yesterdayDT, 'day')) {
    return 'Yesterday'
  }

  return createdDT.toLocaleString(DateTime.DATE_MED)
}

const isParticipantOwner = participation =>
  participation.role === PARTICIPANT_ROLES.owner

export const groupRoomsByOwnership = participations =>
  transform(
    participations,
    (acc, participation) =>
      isParticipantOwner(participation)
        ? acc.myRooms.push(participation.waitingRoom)
        : acc.followedRooms.push(participation.waitingRoom),
    {
      myRooms: [],
      followedRooms: [],
    },
  )
