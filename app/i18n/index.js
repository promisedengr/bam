import i18n from 'i18n-js'

import includes from 'lodash/includes'
import keys from 'lodash/keys'
import memoize from 'lodash/memoize'

import en from './languages/en.json'
import es from './languages/es.json'

export const LOCALE = 'en'
export const TRANSLATIONS = { en, es }

export const t = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
)

export const getTranslations = () => keys(TRANSLATIONS)

const isLocaleSupported = locale => includes(getTranslations(), locale)

export const setLocale = locale => {
  if (isLocaleSupported(locale)) {
    i18n.locale = locale
  }
}

export const getLocale = () => {
  if (i18n.locale) {
    const locale = i18n.locale.substr(0, 2)
    const supported = isLocaleSupported(locale)

    if (supported) return locale
  }

  return LOCALE
}

export const setup = locale => {
  // NOTE: Clear translation cache
  t.cache.clear()

  // NOTE: Set i18n-js config
  i18n.locale = locale
  i18n.translations = TRANSLATIONS
  i18n.missingTranslation = key => `![${key}]`
}
