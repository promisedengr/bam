import React from 'react'

import { Preloader } from 'components/blocks'
import { StatusBar } from 'components/ui'

import { Container } from './styles'

const Progress = () => (
  <Container>
    <StatusBar barStyle="dark-content" translucent />
    <Preloader />
  </Container>
)

export default Progress
