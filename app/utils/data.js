import castArray from 'lodash/castArray'
import difference from 'lodash/difference'
import isNaN from 'lodash/isNaN'
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import mapValues from 'lodash/mapValues'
import reduce from 'lodash/reduce'
import trim from 'lodash/trim'
import union from 'lodash/union'

export const toggleItem = (items, item, active) =>
  active ? union(items, castArray(item)) : difference(items, castArray(item))

export const trimify = x => mapValues(x, o => (isString(o) ? trim(o) : o))

// Calculate The Percentage Of Value To A Value
// "num1" is what percent of "num2"
export const percentageOfNumberToNumber = (num1, num2) => (num1 / num2) * 100

// Calculate The Value Of A Percentage Of A Value
// What is "pct"% of "num"
export const percentageOfNumber = (num, pct) => (pct / 100) * num

export const getSafeNumber = (value, fallback = null) =>
  Number(value) || fallback

export const getSafeString = (value, fallback = null) => {
  if (!isNaN(value) && isNumber(value)) {
    return value.toString()
  }

  if (isString(value)) {
    return value
  }

  return fallback
}

export const nullifyFields = list =>
  reduce(list, (acc, field) => ({ ...acc, [field]: null }), {})
