import Immutable from 'seamless-immutable'

import { getLocale } from 'i18n'

import { createReducer } from 'utils/redux'

import { LocaleTypes } from 'store/actions/locale'

const INITIAL_STATE = Immutable({
  locale: getLocale(),
})

const switchLocale = (state, { locale }) => state.merge({ locale })

const HANDLERS = {
  [LocaleTypes.SWITCH_LOCALE]: switchLocale,
}

export default createReducer(INITIAL_STATE, HANDLERS)
