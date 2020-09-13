import isFunction from 'lodash/isFunction'
import isNil from 'lodash/isNil'
import isString from 'lodash/isString'
import join from 'lodash/join'
import toLower from 'lodash/toLower'

const safeFormat = (validate, formatter, defaultValue) => value => {
  const valid = isFunction(validate) ? validate(value) : true

  if (valid) {
    return formatter(value)
  }

  return isNil(defaultValue) ? value : defaultValue
}

const expirationDate = value => {
  if (!value) return value

  const numbers = value.replace(/[^\d]/g, '')

  if (numbers.length <= 2) return numbers

  return join([numbers.slice(0, 2), numbers.slice(2, 6)], '/')
}

const lowerCase = toLower

const round = value => Math.round(value, 10)

const integer = safeFormat(
  isString,
  value => value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1'),
  '',
)

const float = safeFormat(
  isString,
  value => value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'),
  '',
)

const phone = value => (value ? `+${value}` : '')

export default {
  expirationDate,
  float,
  integer,
  lowerCase,
  round,
  phone,
}
