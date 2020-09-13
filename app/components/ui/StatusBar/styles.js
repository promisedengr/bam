import styled, { css } from 'styled-components/native'

import { getMetrics } from 'theme'

import { Box } from '../Box'

export const Container = styled(Box)`
  height: ${getMetrics('statusBarHeight')};

  ${props =>
    props.translucent &&
    css`
      height: 0;
    `}
`
