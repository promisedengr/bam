import React, { Component } from 'react'
import { Animated, Easing } from 'react-native'
import PT from 'prop-types'

import { withTheme } from 'styled-components/native'

import delay from 'lodash/delay'
import includes from 'lodash/includes'
import indexOf from 'lodash/indexOf'
import isNumber from 'lodash/isNumber'
import map from 'lodash/map'
import merge from 'lodash/merge'
import noop from 'lodash/noop'
import reduce from 'lodash/reduce'
import reject from 'lodash/reject'

import PickingService from 'services/picking'

import { listWithSeparators } from 'utils/presentational'

import { getSpace } from 'theme'

import {
  Container,
  OverlayBackground,
  Overlay,
  Modal,
  Header,
  HeaderTitle,
  Body,
  Content,
  Option,
  Separator,
  StatusBar,
  getMaxHeight,
  getBottomSpace,
} from './styles'

class ActionSheetComponent extends Component {
  constructor(props) {
    super(props)

    this.isScrollEnabled = false
    this.translateY = this.calculateHeight(props)

    this.state = {
      isVisible: false,
      sheetAnimation: new Animated.Value(this.translateY),
      overlayAnimation: new Animated.Value(0),
    }
  }

  calculateHeight = props => {
    const getHeight = Comp =>
      reduce(
        ['height', 'm', 'mt', 'mb'],
        (acc, property) => {
          const value = merge({}, ...Comp.attrs)[property]
          const computedValue =
            property === 'height' ? value : getSpace(value)(props)

          return acc + (computedValue || 0)
        },
        0,
      )

    const header = getHeight(Header)
    const options = props.options.length * getHeight(Option)
    const separators = (props.options.length - 1) * getHeight(Separator)
    const extraBottomSpace = getBottomSpace(props, true)
    const maxHeight = getMaxHeight(props)

    let height = header + options + separators + extraBottomSpace

    if (height > maxHeight) {
      this.isScrollEnabled = true
      height = maxHeight
    } else {
      this.isScrollEnabled = false
    }

    return height
  }

  isOptionDisabled = (option, index) => {
    const { cancelButtonIndex, disabledIds, getOptionId } = this.props

    const cancelButton = cancelButtonIndex === index
    const included = includes(disabledIds, getOptionId(option))

    return !cancelButton && included
  }

  show = () => {
    this.setState({ isVisible: true }, () => {
      this.showSheet()
    })
  }

  hide = index => {
    const { options, onPress } = this.props

    this.hideSheet(() => {
      this.setState({ isVisible: false }, () => {
        // INFO: Libraries such as react-native-image-picker are getting broken
        //       if we call `launchImageLibrary` right after closing modal
        delay(onPress, 10, options[index], this.props)
      })
    })
  }

  showSheet = () => {
    const { sheetAnimation, overlayAnimation } = this.state

    Animated.parallel([
      Animated.timing(sheetAnimation, {
        toValue: 0,
        duration: 250,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(overlayAnimation, {
        toValue: 1,
        duration: 400,
        easing: Easing.out(Easing.ease),
      }),
    ]).start()
  }

  hideSheet = callback => {
    const { sheetAnimation, overlayAnimation } = this.state

    Animated.parallel([
      Animated.timing(sheetAnimation, {
        toValue: this.translateY,
        duration: 200,
      }),
      Animated.timing(overlayAnimation, {
        toValue: 0,
        duration: 350,
      }),
    ]).start(callback)
  }

  handleCancel = () => {
    const { cancelButtonIndex } = this.props

    if (isNumber(cancelButtonIndex)) {
      this.hide(cancelButtonIndex)
    }
  }

  handleOptionPress = option => {
    const { options } = this.props
    const optionIndex = indexOf(options, option)

    this.hide(optionIndex)
  }

  renderOptions() {
    const { options, cancelButtonIndex } = this.props

    return listWithSeparators(
      map(
        reject(options, (option, i) => i === cancelButtonIndex),
        this.renderButton,
      ),
      this.renderSeparator,
    )
  }

  renderButton = (option, index) => {
    const { cancelButtonIndex, getOptionId, getOptionLabel } = this.props

    const isCancel = cancelButtonIndex === index
    const isDisabled = this.isOptionDisabled(option, index)

    return (
      <Option
        key={getOptionId(option) || index}
        option={option}
        isCancel={isCancel}
        isDisabled={isDisabled}
        getOptionLabel={getOptionLabel}
        onPress={this.handleOptionPress}
      />
    )
  }

  renderCancelButton = () => {
    const { options, cancelButtonIndex } = this.props

    return isNumber(cancelButtonIndex)
      ? this.renderButton(options[cancelButtonIndex], cancelButtonIndex)
      : null
  }

  renderSeparator = ({ index }) => <Separator key={`separator-${index}`} />

  render() {
    const { title, cancelButtonIndex } = this.props
    const { isVisible, sheetAnimation, overlayAnimation } = this.state

    const statusBar = PickingService.platformLazy({
      android: () => <StatusBar />,
    })

    const opacityInterpolation = overlayAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.7],
    })

    const overlayStyle = { opacity: opacityInterpolation }

    const bodyStyle = {
      height: this.translateY,
      transform: [{ translateY: sheetAnimation }],
    }

    return (
      <Modal visible={isVisible} onRequestClose={this.handleCancel}>
        {statusBar}

        <Container>
          <Overlay onPress={this.handleCancel}>
            <OverlayBackground as={Animated.View} style={overlayStyle} />
          </Overlay>

          <Body as={Animated.View} style={bodyStyle}>
            <Header>
              <HeaderTitle>{title}</HeaderTitle>
            </Header>

            <Content scrollEnabled={this.isScrollEnabled}>
              {this.renderOptions()}
              {this.renderSeparator({ index: cancelButtonIndex })}
              {this.renderCancelButton()}
            </Content>
          </Body>
        </Container>
      </Modal>
    )
  }
}

ActionSheetComponent.propTypes = {
  cancelButtonIndex: PT.number,
  disabledIds: PT.array,
  getOptionId: PT.func,
  getOptionLabel: PT.func,
  maxHeight: PT.number, // eslint-disable-line
  options: PT.array,
  title: PT.string,
  onPress: PT.func,
}

ActionSheetComponent.defaultProps = {
  cancelButtonIndex: 0,
  disabledIds: [],
  getOptionId: o => o.id,
  getOptionLabel: o => o.label,
  maxHeight: null,
  onPress: noop,
  options: [],
  title: 'Choose action',
}

export const ActionSheet = withTheme(ActionSheetComponent)
