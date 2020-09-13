import React, { Component } from 'react'

import { Form } from 'react-final-form'
import { NavigationActions } from 'react-navigation'

import { verificationImage, accountCreatedImage } from 'images'

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

class Verification extends Component {
  handleSubmit = () => {
    const { navigation } = this.props
    const { params } = navigation.state

    if (params && params.isVerified) {
      navigation.dispatch(
        NavigationActions.navigate({ routeName: auth.signIn }),
      )
    } else {
      navigation.goBack()
    }
  }

  renderForm = ({ handleSubmit }) => {
    const { params } = this.props.navigation.state
    const image =
      params && params.isVerified ? accountCreatedImage : verificationImage

    return (
      <FormInner>
        <Content>
          <Image source={image} />

          <Description>
            {params && params.isVerified
              ? 'Awesome! Your account was successfully created!'
              : 'Please verify your email by clicking the link ' +
                'sent to your email address within 3 days.'}
          </Description>
        </Content>

        <FormFooter>
          <Button
            title={params && params.isVerified ? 'Okay' : 'Back'}
            onPress={handleSubmit}
          />
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

Verification.propTypes = {
  ...ReactNavigationPropTypes,
}

export default Verification
