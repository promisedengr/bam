import React, { Component } from 'react'

import { NavigationActions } from 'react-navigation'

import { ReactNavigationPropTypes } from 'constants/propTypes'
import { auth } from 'constants/routeNames'

import {
  Container,
  Scrollable,
  StatusBar,
  Logos,
  Logo,
  FormInner,
  FormFooter,
  Button,
} from './styles'

class Welcome extends Component {
  handleSignInPress = () => {
    const { navigation } = this.props

    navigation.dispatch(NavigationActions.navigate({ routeName: auth.signIn }))
  }

  handleSignUpPress = () => {
    const { navigation } = this.props

    navigation.dispatch(NavigationActions.navigate({ routeName: auth.signUp }))
  }

  render() {
    return (
      <Container>
        <Scrollable fromTop toBottom>
          <StatusBar />

          <FormInner>
            <Logos>
              <Logo />
            </Logos>

            <FormFooter>
              <Button
                title="Create an account"
                mb={4}
                onPress={this.handleSignUpPress}
              />

              <Button title="Sign In" isLast onPress={this.handleSignInPress} />
            </FormFooter>
          </FormInner>
        </Scrollable>
      </Container>
    )
  }
}

Welcome.propTypes = {
  ...ReactNavigationPropTypes,
}

export default Welcome
