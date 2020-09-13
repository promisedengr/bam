import {
  gendersBoyIcon,
  gendersGirlIcon,
  gendersTwinsIcon,
  gendersUnknownIcon,
} from 'images'

export const GENDERS = {
  boy: 'Boy',
  girl: 'Girl',
  twins: 'Twins',
  unknown: 'Unknown',
}

export const COLOR_BY_GENDER = {
  [GENDERS.boy]: 'malibu',
  [GENDERS.girl]: 'pinkSalmon',
  [GENDERS.twins]: 'salomie',
  [GENDERS.unknown]: 'aquamarineBlue',
}

export const GLYPH_BY_GENDER = {
  [GENDERS.boy]: gendersBoyIcon,
  [GENDERS.girl]: gendersGirlIcon,
  [GENDERS.twins]: gendersTwinsIcon,
  [GENDERS.unknown]: gendersUnknownIcon,
}

export const PARTICIPANT_ROLES = {
  owner: 'owner',
}

export const SETTINGS_SECTIONS = {
  updates: 0,
  bumpdates: 1,
  bam: 2,
  visitingInfo: 3,
}

export const SETTINGS = [
  {
    title: 'Updates',
    sectionId: SETTINGS_SECTIONS.updates,
    preferences: [
      { id: '0', name: 'updatepn', label: 'Push Notification', value: false },
      { id: '1', name: 'updatetn', label: 'Text Notification', value: false },
      { id: '2', name: 'updateen', label: 'Email Notification', value: false },
    ],
  },
  {
    title: 'Bumpdates',
    sectionId: SETTINGS_SECTIONS.bumpdates,
    preferences: [
      { id: '3', name: 'bumppn', label: 'Push Notification', value: false },
      { id: '4', name: 'bumptn', label: 'Text Notification', value: false },
      { id: '5', name: 'bumpen', label: 'Email Notification', value: false },
    ],
  },
  {
    title: 'BAM!',
    sectionId: SETTINGS_SECTIONS.bam,
    preferences: [
      { id: '6', name: 'bampn', label: 'Push Notification', value: false },
      { id: '7', name: 'bamtn', label: 'Text Notification', value: false },
      { id: '8', name: 'bamen', label: 'Email Notification', value: false },
    ],
  },
  {
    title: 'Visiting Info',
    sectionId: SETTINGS_SECTIONS.visitingInfo,
    preferences: [
      { id: '12', name: 'visitpn', label: 'Push Notification', value: false },
      { id: '13', name: 'visittn', label: 'Text Notification', value: false },
      { id: '14', name: 'visiten', label: 'Email Notification', value: false },
    ],
  },
]
