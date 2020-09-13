import { createActions } from 'reduxsauce'

export const { Types: LocaleTypes, Creators: LocaleCreators } = createActions(
  {
    switchLocale: ['locale'],
  },
  { prefix: 'Locale/' },
)
