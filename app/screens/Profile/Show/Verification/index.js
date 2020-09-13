import React, { Component } from 'react'
import PT from 'prop-types'

import { getValue } from 'utils/form'

import { ReactNavigationPropTypes } from 'constants/propTypes'
import { main } from 'constants/routeNames'

import {
  Container,
  Buttons,
  Button,
  Status,
  StatusText,
  StatusCheckmark,
} from './styles'

class Verification extends Component {
  handlePhonePress = () => {
    const { navigation } = this.props
    navigation.navigate({ routeName: main.phoneConfirmation })
  }

  renderStatus = () => {
    const { user } = this.props
    const pPhone = getValue(user, 'profile.pendingPrimaryPhoneNumber')

    if (pPhone) {
      return (
        <Status>
          <StatusText>Your profile is not verified</StatusText>
        </Status>
      )
    }

    return (
      <Status>
        <StatusCheckmark />
        <StatusText>Your profile is verified</StatusText>
      </Status>
    )
  }

  renderButtons = () => {
    const { user } = this.props

    const phoneButton = !!getValue(
      user,
      'profile.pendingPrimaryPhoneNumber',
    ) && (
      <Button
        title="Verify Phone"
        variant="secondary"
        isLast
        onPress={this.handlePhonePress}
      />
    )

    if (!phoneButton) {
      return null
    }

    return <Buttons>{phoneButton}</Buttons>
  }

  render() {
    return (
      <Container>
        {this.renderStatus()}
        {this.renderButtons()}
      </Container>
    )
  }
}

Verification.propTypes = {
  ...ReactNavigationPropTypes,
  user: PT.object.isRequired,
}

export { Verification }
