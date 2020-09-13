import React from 'react'

import { ViewPropTypes } from 'constants/propTypes'

import { Container, Button } from './styles'

const BamButton = ({ style }) => (
  <Container style={style}>
    <Button title="BAM" scale="bam" />
  </Container>
)

BamButton.propTypes = {
  style: ViewPropTypes.style,
}

BamButton.defaultProps = {
  style: {},
}

export { BamButton }
