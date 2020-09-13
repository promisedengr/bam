import styled from 'styled-components/native'

import { Hr, Text } from 'components/ui'

export const Container = styled.View`
  height: 30px;
  flex-direction: row;
  align-items: center;
`

export const Line = styled(Hr)`
  flex: 1;
`

export const DayText = styled(Text).attrs({
  mx: 12, // NOTE: Custom space
  fontSize: 0,
  fontFamilyStyle: 'styles.bold',
  color: 'pinkSalmon',
})``
