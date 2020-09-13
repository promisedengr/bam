import { all, select, takeLatest } from 'redux-saga/effects'

import { setLocale } from 'i18n'

import { LocaleTypes } from 'store/actions/locale'

import { getCurrentLocale } from 'store/selectors/locale'

function* locale() {
  const currentLocale = yield select(getCurrentLocale)
  setLocale(currentLocale)
}

export default function* main() {
  yield all([takeLatest(LocaleTypes.SWITCH_LOCALE, locale)])
}
