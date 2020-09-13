import React, { Component } from 'react'
import PT from 'prop-types'

import { Form, Field } from 'react-final-form'

import ValidationService from 'services/validation'

import { getValue } from 'utils/form'
import { SMSCode } from 'utils/masks'

import { ReactNavigationPropTypes } from 'constants/propTypes'

import {
  Container,
  Scrollable,
  FormInner,
  FormContent,
  FormFooter,
  VerificationImage,
  MaskedTextInput,
  Instruction,
  Button,
} from './styles'

class PhoneConfirmation extends Component {
  componentDidMount() {
    this.handleSMSSend()
  }

  getInitialValues = () => ({
    verificationCode: '',
  })

  validate = values => {
    const constraints = {
      verificationCode: ValidationService.schemas.constraints.SMSCode,
    }

    return ValidationService.validate(constraints, values)
  }

  getPhoneNumberId = () => {
    const { user } = this.props
    return getValue(user, 'profile.pendingPrimaryPhoneNumber')
  }

  handleSubmit = async values => {
    const { navigation, onConfirm } = this.props

    const response = await new Promise(resolve => {
      onConfirm(this.getPhoneNumberId(), values.verificationCode, resolve)
    })

    if (response.ok) {
      navigation.goBack()
    }
  }

  handleSMSSend = () => {
    const { onSend } = this.props
    onSend(this.getPhoneNumberId())
  }

  renderForm = ({ invalid, pristine, submitting, handleSubmit }) => (
    <FormInner>
      <FormContent>
        <VerificationImage />

        <Field
          name="verificationCode"
          component={MaskedTextInput}
          placeholder="123456"
          type="custom"
          keyboardType="numeric"
          options={SMSCode.options}
        />

        <Instruction>
          Enter the confirmation code sent to you via SMS.
        </Instruction>
      </FormContent>

      <FormFooter>
        <Button
          title="Confirm"
          isLast
          isDisabled={invalid || pristine || submitting}
          onPress={handleSubmit}
        />
      </FormFooter>
    </FormInner>
  )

  render() {
    return (
      <Container>
        <Scrollable>
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

PhoneConfirmation.propTypes = {
  ...ReactNavigationPropTypes,
  user: PT.object.isRequired,
  onConfirm: PT.func.isRequired,
  onSend: PT.func.isRequired,
}

export default PhoneConfirmation
