import React, { Component } from 'react'
import PT from 'prop-types'

import DTPicker from 'react-native-modal-datetime-picker'
import { DateTime } from 'luxon'

import { ViewPropTypes, FinalFormPropTypes } from 'constants/propTypes'

import {
  Container,
  FieldLabel,
  FieldBottom,
  Picker,
  PickerContent,
  PickerCalendar,
  PickerCalendarIcon,
  PickerValue,
  PickerValueMissing,
} from './styles'

const FORMAT_BY_MODE = {
  date: {
    parse: 'yyyy-MM-dd',
    value: 'MM/dd/yyyy',
  },
}

class Datepicker extends Component {
  state = {
    isVisible: false,
  }

  value2Date = value => {
    const { mode } = this.props
    const format = FORMAT_BY_MODE[mode]

    if (!value) {
      return new Date()
    }

    if (!format) {
      return DateTime.fromISO(value).toJSDate()
    }

    return DateTime.fromFormat(value, format.parse).toJSDate()
  }

  date2Value = date => {
    const { mode } = this.props
    const format = FORMAT_BY_MODE[mode]

    if (!date) {
      return DateTime.fromObject({}).toISO()
    }

    if (!format) {
      return DateTime.fromJSDate(date).toISO()
    }

    return DateTime.fromJSDate(date).toFormat(format.parse)
  }

  setVisibility = (isVisible, cb) => {
    const {
      input: { onFocus, onBlur },
    } = this.props

    this.setState({ isVisible }, () => {
      if (this.state.isVisible) {
        onFocus()
      } else {
        onBlur()
      }
      if (cb) {
        cb()
      }
    })
  }

  handlePickerPress = () => {
    const { isVisible } = this.state
    this.setVisibility(!isVisible)
  }

  handlePickSuccess = date => {
    const { input } = this.props

    this.setVisibility(false, () => {
      input.onChange(this.date2Value(date))
    })
  }

  handlePickFailure = () => {
    this.setVisibility(false)
  }

  formatValue(value) {
    const { mode } = this.props
    const format = FORMAT_BY_MODE[mode]

    if (!value) {
      return null
    }

    if (!format) {
      return DateTime.fromISO(value).toISODate()
    }

    return DateTime.fromISO(value).toFormat(format.value)
  }

  renderPickerValue() {
    const { input, placeholder } = this.props

    if (!input.value && !placeholder) {
      return <PickerValueMissing />
    }

    const isPlaceholder = !input.value
    const value = isPlaceholder ? placeholder : this.formatValue(input.value)

    return <PickerValue isPlaceholder={isPlaceholder}>{value}</PickerValue>
  }

  renderPicker() {
    const { meta, isDisabled } = this.props

    const hasError = FieldBottom.hasError(meta)

    return (
      <Picker disabled={isDisabled} onPress={this.handlePickerPress}>
        <PickerContent hasError={hasError}>
          {this.renderPickerValue()}

          <PickerCalendar>
            <PickerCalendarIcon hasError={hasError} />
          </PickerCalendar>
        </PickerContent>
      </Picker>
    )
  }

  render() {
    const { meta, input, label, isDisabled, style, ...restProps } = this.props
    const { value, onChange, ...restInput } = input
    const { isVisible } = this.state

    return (
      <Container style={style}>
        <FieldLabel label={label} />

        {this.renderPicker()}

        <DTPicker
          {...restProps}
          {...restInput}
          date={this.value2Date(value)}
          isVisible={isVisible && !isDisabled}
          onConfirm={this.handlePickSuccess}
          onCancel={this.handlePickFailure}
        />

        <FieldBottom meta={meta} />
      </Container>
    )
  }
}

Datepicker.propTypes = {
  ...FinalFormPropTypes,
  isDisabled: PT.bool,
  label: PT.string,
  mode: PT.string,
  style: ViewPropTypes.style,
}

Datepicker.defaultProps = {
  isDisabled: false,
  label: null,
  mode: 'date',
  style: {},
}

export { Datepicker }
