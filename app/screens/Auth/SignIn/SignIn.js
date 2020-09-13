import React, { Component } from 'react'
import PT from 'prop-types'

import { Form, Field } from 'react-final-form'
import { NavigationActions } from 'react-navigation'

import ValidationService from 'services/validation'

import { ReactNavigationPropTypes } from 'constants/propTypes'
import { app, auth } from 'constants/routeNames'

import {
  Container,
  Scrollable,
  FormInner,
  FormContent,
  FormFooter,
  LinkButton,
  Button,
  TextInput,
} from './styles'

class SignIn extends Component {
  getInitialValues = () => ({
    email: '',
    password: '',
  })

  validate = values => {
    const constraints = {
      email: {
        presence: true,
        email: true,
      },
      password: {
        presence: true,
        length: { minimum: 8 },
      },
    }

    return ValidationService.validate(constraints, values)
  }

  handleForgotPress = () => {
    const { navigation } = this.props

    navigation.dispatch(
      NavigationActions.navigate({ routeName: auth.forgotPassword }),
    )
  }

  handleSignUpPress = () => {
    const { navigation } = this.props

    navigation.dispatch(NavigationActions.navigate({ routeName: auth.signUp }))
  }

  handleSubmit = async values => {
    const { navigation } = this.props

    const response = await new Promise(resolve =>
      this.props.onSignIn(values.email, values.password, resolve),
    )

    if (response.ok) {
      navigation.dispatch(
        NavigationActions.navigate({ routeName: app.redirector }),
      )
    }
  }

  renderForm = ({ handleSubmit }) => (
    <FormInner>
      <FormContent>
        <Field
          name="email"
          component={TextInput}
          keyboardType="email-address"
          label="Email"
          placeholder="Email address"
          autoCapitalize="none"
        />

        <Field
          name="password"
          component={TextInput}
          label="Password"
          placeholder="Enter your password"
          autoCapitalize="none"
          secureTextEntry
          isLast
        />

        <LinkButton onPress={this.handleForgotPress}>
          Forgot your password?
        </LinkButton>
      </FormContent>

      <FormFooter>
        <Button title="Sign In" isLast onPress={handleSubmit} />

        <LinkButton onPress={this.handleSignUpPress}>
          Create an account
        </LinkButton>
      </FormFooter>
    </FormInner>
  )

  render() {
    return (
      <Container>
        <Scrollable toBottom>
          <Form
            initialValues={this.getInitialValues()}
            validate={this.validate}
            render={this.renderForm}
            onSubmit={this.handleSubmit}
          />
        </Scrollable>
      </Container>
    )
  }
}

SignIn.propTypes = {
  ...ReactNavigationPropTypes,
  onSignIn: PT.func.isRequired,
}

export default SignIn
