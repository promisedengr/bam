import React from 'react'
import PT from 'prop-types'

import { ViewPropTypes } from 'constants/propTypes'

import { Container, Title, Content } from './styles'

const Section = ({ title, style, children }) => (
  <Container style={style}>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </Container>
)

Section.propTypes = {
  children: PT.node,
  style: ViewPropTypes.style,
  title: PT.string.isRequired,
}

Section.defaultProps = {
  children: null,
  style: {},
}

export default Section
