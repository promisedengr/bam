import styled from 'styled-components/native'
import { space } from 'styled-system'

import { BamButton as BamButtonBlock } from 'components/blocks'

import { Text as TextUI } from 'components/ui'

export const Container = styled.View``

export const BamButton = styled(BamButtonBlock).attrs({
  mx: 10,
})`
  ${space}
`

export const ExpectedDate = styled(TextUI).attrs({
  mt: 3,
  fontSize: 0,
})`
  text-align: center;
`
