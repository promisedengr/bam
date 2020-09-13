import styled from 'styled-components/native'
import { space } from 'styled-system'

import { calendarIcon } from 'images'

import { Box } from '../Box'
import { FieldLabel as FieldLabelUI } from '../FieldLabel'
import { Icon } from '../Icon'
import { Text } from '../Text'

export { FieldBottom } from '../FieldBottom'

export const Container = styled.View``

export const Picker = styled.TouchableWithoutFeedback``

export const PickerContent = styled(Box).attrs(props => ({
  bg: 'white',
  height: 40,
  borderColor: props.hasError ? 'vividTangerine' : 'dustyGray',
  borderRadius: 1,
}))`
  flex-direction: row;
  align-items: center;
  border-width: 1;
`

export const PickerCalendar = styled.View`
  width: 40;
  align-items: center;
  justify-content: center;
`

export const PickerCalendarIcon = styled(Icon).attrs(props => ({
  glyph: calendarIcon,
  tintColor: props.hasError ? 'vividTangerine' : 'malibu',
}))``

export const PickerValue = styled(Text).attrs(props => ({
  mx: 4,
  numberOfLines: 1,
  color: props.isPlaceholder ? 'silver' : 'tundora',
}))`
  flex: 1;
`

export const PickerValueMissing = styled.View`
  flex: 1;
`

export const FieldLabel = styled(FieldLabelUI).attrs({ mb: 3 })`
  ${space}
`
