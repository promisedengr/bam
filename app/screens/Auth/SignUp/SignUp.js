import React, { Component } from 'react'
import PT from 'prop-types'

import { Form, Field } from 'react-final-form'
import { NavigationActions } from 'react-navigation'

import ValidationService from 'services/validation'

import { ReactNavigationPropTypes } from 'constants/propTypes'
import { auth } from 'constants/routeNames'

import {
  Container,
  FormInner,
  FormContent,
  FormFooter,
  Button,
  TextInput,
  Meta,
  HasAccount,
  LinkButton,
  Scrollable,
  Separator,
} from './styles'

class SignUp extends Component {
  getInitialValues = () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  validate = values => {
    const constraints = {
      firstName: {
        presence: {
          allowEmpty: false,
        },
      },
      lastName: {
        presence: {
          allowEmpty: false,
        },
      },
      email: {
        presence: true,
        email: true,
      },
      password: {
        presence: {
          allowEmpty: false,
        },
        length: { minimum: 8 },
      },
      confirmPassword: {
        presence: {
          allowEmpty: false,
        },
        equality: 'password',
      },
    }

    return ValidationService.validate(constraints, values)
  }

  handleSubmit = async values => {
    await new Promise(resolve =>
      this.props.onSignUp(
        values.email,
        values.password,
        values.firstName,
        values.lastName,
        resolve,
      ),
    )
  }

  handleSignInPress = () => {
    const { navigation } = this.props

    navigation.dispatch(
      NavigationActions.navigate({
        routeName: auth.signIn,
        params: { isVerified: true },
      }),
    )
  }

  renderForm = ({ handleSubmit }) => (
    <FormInner>
      <FormContent>
        <Field
          name="firstName"
          component={TextInput}
          label="First name"
          placeholder="Your first name"
          autoCapitalize="words"
        />

        <Field
          name="lastName"
          component={TextInput}
          label="Last name"
          placeholder="Your last name"
          autoCapitalize="words"
          isLast
        />

        <Separator />

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
          placeholder="Create a password"
          autoCapitalize="none"
          secureTextEntry
        />

        <Field
          name="confirmPassword"
          component={TextInput}
          label="Confirm password"
          placeholder="Confirm your password"
          autoCapitalize="none"
          secureTextEntry
          isLast
        />
      </FormContent>

      <FormFooter>
        <Button title="Sign Up" isLast onPress={handleSubmit} />

        <Meta>
          <HasAccount>Already have an account?</HasAccount>

          <LinkButton onPress={this.handleSignInPress}>Sign In</LinkButton>
        </Meta>
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

SignUp.propTypes = {
  ...ReactNavigationPropTypes,
  onSignUp: PT.func.isRequired,
}

export default SignUp
