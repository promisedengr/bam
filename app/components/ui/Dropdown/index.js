import React, { Component } from 'react'
import PT from 'prop-types'

import find from 'lodash/find'

import { ViewPropTypes, FinalFormPropTypes } from 'constants/propTypes'

import {
  Container,
  FieldLabel,
  FieldBottom,
  Picker,
  PickerContent,
  PickerArrow,
  PickerArrowIcon,
  PickerValue,
  PickerValueMissing,
  Sheet,
} from './styles'

class Dropdown extends Component {
  getSelectedOption = () => {
    const { input, options } = this.props

    if (!input.value) {
      return null
    }

    return find(options, { value: input.value.toString() })
  }

  handlePickerPress = () => {
    this.sheetRef.show()
  }

  handleSheetRef = ref => {
    this.sheetRef = ref
  }

  renderPickerValue() {
    const { input, placeholder } = this.props

    if (!input.value && !placeholder) {
      return <PickerValueMissing />
    }

    const selectedOption = this.getSelectedOption()
    const isPlaceholder = !selectedOption
    const value = selectedOption ? selectedOption.label : placeholder

    return <PickerValue isPlaceholder={isPlaceholder}>{value}</PickerValue>
  }

  renderPicker() {
    const { meta, isDisabled } = this.props

    const hasError = FieldBottom.hasError(meta)

    return (
      <Picker disabled={isDisabled} onPress={this.handlePickerPress}>
        <PickerContent hasError={hasError}>
          {this.renderPickerValue()}

          <PickerArrow>
            <PickerArrowIcon hasError={hasError} />
          </PickerArrow>
        </PickerContent>
      </Picker>
    )
  }

  render() {
    const {
      meta,
      input,
      label,
      title,
      style,
      options,
      ...sheetProps
    } = this.props

    return (
      <Container style={style}>
        <FieldLabel label={label} />

        {this.renderPicker()}

        <Sheet
          {...sheetProps}
          {...input}
          ref={this.handleSheetRef}
          title={title || label}
          options={options}
          selectedOption={this.getSelectedOption()}
        />

        <FieldBottom meta={meta} />
      </Container>
    )
  }
}

Dropdown.propTypes = {
  ...FinalFormPropTypes,
  isDisabled: PT.bool,
  label: PT.string,
  options: PT.array,
  style: ViewPropTypes.style,
}

Dropdown.defaultProps = {
  isDisabled: false,
  label: null,
  options: [],
  style: {},
}

export { Dropdown }
