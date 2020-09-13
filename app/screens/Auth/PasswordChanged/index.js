import React, { Component } from 'react'

import { Form } from 'react-final-form'
import { NavigationActions } from 'react-navigation'

import { passwordChangedImage } from 'images'

import { ReactNavigationPropTypes } from 'constants/propTypes'
import { auth } from 'constants/routeNames'

import {
  Container,
  FormInner,
  Content,
  FormFooter,
  Button,
  Image,
  Description,
  Scrollable,
} from './styles'

class PasswordChanged extends Component {
  handleSubmit = () => {
    const { navigation } = this.props

    navigation.dispatch(NavigationActions.navigate({ routeName: auth.signIn }))
  }

  renderForm = ({ handleSubmit }) => {
    return (
      <FormInner>
        <Content>
          <Image source={passwordChangedImage} />

          <Description>A new password has been set.</Description>
        </Content>

        <FormFooter>
          <Button title="Okay" onPress={handleSubmit} />
        </FormFooter>
      </FormInner>
    )
  }

  render() {
    return (
      <Container>
        <Scrollable>
          <Form render={this.renderForm} onSubmit={this.handleSubmit} />
        </Scrollable>
      </Container>
    )
  }
}

PasswordChanged.propTypes = {
  ...ReactNavigationPropTypes,
}

export default PasswordChanged
