import React from 'react'
import { TouchableOpacity } from 'react-native'
import PT from 'prop-types'

import { Container, Icon } from './styles'

const SendButton = ({ isDisabled, onPress }) => (
  <Container isDisabled={isDisabled} as={TouchableOpacity} onPress={onPress}>
    <Icon />
  </Container>
)

SendButton.propTypes = {
  isDisabled: PT.bool.isRequired,
  onPress: PT.func.isRequired,
}

export { SendButton }
