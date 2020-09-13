import { getSafeString } from './data'
import { removeNotNumbers } from './string'

const safeString = reducer => value => reducer(getSafeString(value, ''))

export const usPhoneNumber = {
  options: {
    mask: '(999) 999-9999',
    getRawValue: removeNotNumbers,
  },

  normalizeValue: safeString(v => `+1 ${v}`),
  denormalizeValue: safeString(v => v.replace(/^(\+1|1)/g, '')),
}

export const ssn = {
  options: {
    mask: '999-99-9999',
    getRawValue: removeNotNumbers,
  },
}

export const SMSCode = {
  options: {
    mask: '999999',
  },
}
