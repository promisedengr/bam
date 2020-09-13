import React, { Component, isValidElement } from 'react'
import PT from 'prop-types'

import { ReactNavigationPropTypes } from 'constants/propTypes'

import {
  Container,
  StatusBar,
  Content,
  InnerContent,
  Title,
  Left,
  Right,
  Back,
  Background,
} from './styles'

class Main extends Component {
  getOptions = () => this.props.scene.descriptor.options

  handleBackPress = () => {
    const { navigation } = this.props
    navigation.goBack(null)
  }

  renderBack = () => <Back onPress={this.handleBackPress} />

  renderLeft() {
    const { scene, withBack } = this.props
    const options = this.getOptions()

    if (isValidElement(options.headerLeft) || options.headerLeft === null) {
      return <Left>{options.headerLeft}</Left>
    }

    let result = null

    if (scene.index > 0 || withBack) {
      result = this.renderBack()
    }

    return result ? <Left>{result}</Left> : null
  }

  renderRight() {
    const options = this.getOptions()

    if (isValidElement(options.headerRight) || options.headerRight === null) {
      return <Right>{options.headerRight}</Right>
    }

    return null
  }

  renderTitle = () => {
    const options = this.getOptions()

    if (!options.title) {
      return null
    }

    return <Title>{options.title}</Title>
  }

  render() {
    const { bg } = this.props

    return (
      <Container bg={bg}>
        <StatusBar />
        <Background />

        <Content>
          <InnerContent>
            {this.renderLeft()}
            {this.renderTitle()}
            {this.renderRight()}
          </InnerContent>
        </Content>
      </Container>
    )
  }
}

Main.propTypes = {
  ...ReactNavigationPropTypes,
  bg: PT.string,
  withBack: PT.bool,
}

Main.defaultProps = {
  bg: 'malibu',
  withBack: false,
}

export { Main }
