import { DateTime } from 'luxon'

// import compact from 'lodash/compact'
// import join from 'lodash/join'
// import isEmpty from 'lodash/isEmpty'
import merge from 'lodash/merge'
// import times from 'lodash/times'

// const FORMATS = {
//   time: 'HH:mm',
// }

export const getDateDateTime = dirtyOptions => {
  const DEFAULT_OPTIONS = {
    date: DateTime.utc().toISO(),
    zone: 'utc',
    setZone: true,
  }
  const options = merge({}, DEFAULT_OPTIONS, dirtyOptions)

  return DateTime.fromISO(options.date, {
    zone: options.zone,
    setZone: options.setZone,
  })
}

export const isSameDay = (dateA, dateB) => {
  if (!dateB) {
    return false
  }

  const aDT = getDateDateTime({ date: dateA })
  const bDT = getDateDateTime({ date: dateB })

  return aDT.hasSame(bDT, 'day')
}

// export const getDatesInterval = dirtyOptions => {
//   const DEFAULT_OPTIONS = {
//     dateA: DateTime.utc().toISO(),
//     dateB: DateTime.utc().toISO(),
//     zone: 'utc',
//     setZone: true,
//   }
//   const options = merge({}, DEFAULT_OPTIONS, dirtyOptions)

//   return Interval.fromISO([options.dateA, options.dateB].join('/'), {
//     zone: options.zone,
//     setZone: options.setZone,
//   })
// }

// export const getWeekInterval = (date, dirtyOptions) => {
//   const DEFAULT_OPTIONS = { zone: 'utc', dayShift: 0 }
//   const options = merge({}, DEFAULT_OPTIONS, dirtyOptions)

//   const dateTime = DateTime.fromISO(date, { zone: options.zone })

//   return Interval.fromDateTimes(
//     dateTime.startOf('week').plus({ day: options.dayShift }),
//     dateTime.endOf('week').plus({ day: options.dayShift }),
//   )
// }

// export const getIntervalDays = interval => {
//   const duration = interval.toDuration('days').toObject()
//   const days = Math.ceil(duration.days)

//   return times(days, day => interval.start.plus({ day }))
// }

// export const getWeekdays = dirtyOptions => {
//   const DEFAULT_OPTIONS = { length: 'long', dayShift: 0 }
//   const options = merge({}, DEFAULT_OPTIONS, dirtyOptions)

//   let result = Info.weekdays(options.length, options)

//   if (options.dayShift) {
//     result = result
//       .slice(options.dayShift)
//       .concat(result.slice(0, options.dayShift))
//   }

//   return result
// }

// export const time2timestamp = dirtyOptions => {
//   const DEFAULT_OPTIONS = {
//     time: DateTime.utc().toFormat(FORMATS.time),
//     zone: 'utc',
//     fromFormat: FORMATS.time,
//   }
//   const options = merge({}, DEFAULT_OPTIONS, dirtyOptions)

//   return DateTime.fromFormat(options.time, options.fromFormat, {
//     zone: options.zone,
//   }).toISO()
// }

// export const timestamp2time = dirtyOptions => {
//   const DEFAULT_OPTIONS = {
//     timestamp: DateTime.utc().toISO(),
//     zone: 'utc',
//     setZone: true,
//     toFormat: FORMATS.time,
//   }
//   const options = merge({}, DEFAULT_OPTIONS, dirtyOptions)

//   return DateTime.fromISO(options.timestamp, {
//     zone: options.zone,
//     setZone: options.setZone,
//   }).toFormat(options.toFormat)
// }

// export const diffTimestamps = dirtyOptions => {
//   const DEFAULT_OPTIONS = {
//     timestamps: [],
//     units: ['hours', 'minutes'],
//   }
//   const options = merge({}, DEFAULT_OPTIONS, dirtyOptions)

//   if (isEmpty(options.timestamps)) {
//     return null
//   }

//   const dateTimeA = DateTime.fromISO(options.timestamps[0])
//   const dateTimeB = DateTime.fromISO(options.timestamps[1])

//   return dateTimeB.diff(dateTimeA, options.units).toObject()
// }

// export const formatDuration = duration => {
//   if (!duration) return null

//   const { hours, minutes } = duration.normalize().toObject()
//   const hrsStr = hours !== 0 || minutes === 0 ? `${hours} hrs` : null

//   return join(
//     compact([
//       hrsStr,
//       hrsStr ? minutes && `${Math.abs(minutes)} mins` : `${minutes} mins`,
//     ]),
//     ' ',
//   )
// }

// export const formatInterval = interval => {
//   if (!interval) return null

//   return join(
//     [interval.start.toFormat('H:mm'), interval.end.toFormat('H:mm')],
//     ' - ',
//   )
// }
