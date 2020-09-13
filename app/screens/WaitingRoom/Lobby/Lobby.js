import React, { Component } from 'react'
import { Animated, Keyboard } from 'react-native'
import PT from 'prop-types'

import get from 'lodash/get'

import PickingService from 'services/picking'

import { Container, Header, Avatar, Panel, Tabs } from './styles'

class Lobby extends Component {
  headerAnimation = new Animated.Value(0)

  state = {
    headerHeight: 0,
  }

  componentDidMount() {
    PickingService.platformLazy({
      ios: () => {
        Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
        Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
      },
      android: () => {
        Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)
        Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)
      },
    })
  }

  componentWillUnmount() {
    PickingService.platformLazy({
      ios: () => {
        Keyboard.removeListener('keyboardWillShow', this.keyboardWillShow)
        Keyboard.removeListener('keyboardWillHide', this.keyboardWillHide)
      },
      android: () => {
        Keyboard.removeListener('keyboardDidShow', this.keyboardWillShow)
        Keyboard.removeListener('keyboardDidHide', this.keyboardWillHide)
      },
    })
  }

  keyboardWillShow = event => {
    Animated.timing(this.headerAnimation, {
      duration: get(event, 'duration', 0),
      toValue: 1,
    }).start()
  }

  keyboardWillHide = event => {
    Animated.timing(this.headerAnimation, {
      duration: get(event, 'duration', 0),
      toValue: 0,
    }).start()
  }

  handleHeaderLayout = event => {
    const prevValue = this.state.headerHeight
    const nextValue = event.nativeEvent.layout.height

    if (prevValue === nextValue) {
      return
    }

    this.setState({ headerHeight: nextValue })
  }

  render() {
    const { room } = this.props
    const { headerHeight } = this.state

    const marginTopInterpolation = this.headerAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, headerHeight * -1],
    })

    const headerStyle = {
      marginTop: marginTopInterpolation,
    }

    return (
      <Container>
        <Header
          as={Animated.View}
          style={headerStyle}
          onLayout={this.handleHeaderLayout}
        >
          <Avatar gender={room.gender} image={room.avatar} />

          <Panel room={room} />
        </Header>

        <Tabs room={room} />
      </Container>
    )
  }
}

Lobby.propTypes = {
  room: PT.object.isRequired,
}

export default Lobby
