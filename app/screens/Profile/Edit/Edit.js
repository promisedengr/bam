import React, { Component } from 'react'
import PT from 'prop-types'

import { Form, Field } from 'react-final-form'

import ValidationService from 'services/validation'

import { getValue } from 'utils/form'
import { usPhoneNumber } from 'utils/masks'

import { ReactNavigationPropTypes } from 'constants/propTypes'

import {
  Container,
  Scrollable,
  AvatarPicker,
  FormInner,
  FormContent,
  FormFooter,
  Separator,
  TextInput,
  Button,
  Row,
  RowLabel,
  RowValue,
  OldValue,
  ToggleBellButton,
  MaskedTextInput,
} from './styles'

const getInitialState = () => ({
  imageFile: null,
  imageData: null,
})

class ProfileEdit extends Component {
  state = getInitialState()

  getInitialValues = () => {
    const { user } = this.props

    return {
      firstName: getValue(user, 'profile.firstName'),
      lastName: getValue(user, 'profile.lastName'),
      email: getValue(user, 'profile.email'),
      newEmail: getValue(user, 'profile.newEmail', ''),
      verifiedPrimaryPhoneNumber: getValue(
        user,
        'profile.verifiedPrimaryPhoneNumber.phoneNumber',
      ),
      pendingPrimaryPhoneNumber: getValue(
        user,
        'profile.pendingPrimaryPhoneNumber.phoneNumber',
      ),
      receiveSMS: getValue(user, 'profile.receiveSMS', false),
      receiveEmail: getValue(user, 'profile.receiveEmail', false),
    }
  }

  validate = values => {
    const constraints = {
      firstName: {
        length: {
          minimum: 2,
          maximum: 25,
        },
      },
      lastName: {
        length: {
          minimum: 2,
          maximum: 25,
        },
      },
    }

    return ValidationService.validate(constraints, values)
  }

  handleSubmit = async values => {
    const { onEdit } = this.props
    const { imageFile } = this.state

    await new Promise(resolve => {
      onEdit(
        values.firstName,
        values.lastName,
        imageFile,
        values.pendingPrimaryPhoneNumber,
        resolve,
      )
    })
  }

  handleCancelPress = () => {
    const { navigation } = this.props
    navigation.goBack()
  }

  handlePhotoPick = ({ imageFile, imageData }) => {
    this.setState({ imageFile, imageData })
  }

  renderPhoneValues = values => {
    const newPhoneEl = (
      <Field
        name="pendingPrimaryPhoneNumber"
        component={MaskedTextInput}
        placeholder="Enter your Phone"
        type="custom"
        keyboardType="phone-pad"
        options={usPhoneNumber.options}
        isLast
      />
    )

    if (!values.verifiedPrimaryPhoneNumber) {
      return <RowValue>{newPhoneEl}</RowValue>
    }

    return (
      <RowValue>
        <Row>
          <OldValue>
            <Field
              name="verifiedPrimaryPhoneNumber"
              component={MaskedTextInput}
              placeholder="(000) 000-00-00"
              type="custom"
              keyboardType="phone-pad"
              options={usPhoneNumber.options}
              isDisabled
              isLast
            />
          </OldValue>

          <Field name="receiveSMS" component={ToggleBellButton} />
        </Row>

        {newPhoneEl}
      </RowValue>
    )
  }

  renderForm = ({ values, invalid, submitting, handleSubmit }) => (
    <FormInner>
      <FormContent>
        <Field
          name="firstName"
          component={TextInput}
          placeholder="First name"
        />

        <Field
          name="lastName"
          component={TextInput}
          placeholder="Last name"
          isLast
        />

        <Separator />

        <Row>
          <RowLabel>Email:</RowLabel>

          <RowValue>
            <Row>
              <OldValue>
                <Field
                  name="email"
                  component={TextInput}
                  keyboardType="email-address"
                  placeholder="Email address"
                  autoCapitalize="none"
                  isDisabled
                  isLast
                />
              </OldValue>

              <Field name="receiveEmail" component={ToggleBellButton} />
            </Row>

            <Field
              name="newEmail"
              component={TextInput}
              keyboardType="email-address"
              placeholder="Enter new Email"
              autoCapitalize="none"
            />
          </RowValue>
        </Row>

        <Row isLast>
          <RowLabel>Phone:</RowLabel>

          {this.renderPhoneValues(values)}
        </Row>

        <Separator />
      </FormContent>

      <FormFooter withoutSpace>
        <Button
          title="Cancel"
          variant="neutral"
          onPress={this.handleCancelPress}
        />

        <Button
          title="Save changes"
          isDisabled={invalid || submitting}
          isLast
          onPress={handleSubmit}
        />
      </FormFooter>
    </FormInner>
  )

  render() {
    const { user } = this.props
    const { imageData } = this.state

    return (
      <Container>
        <Scrollable toBottom>
          <AvatarPicker
            photo={user.profile.avatar}
            previewPhotoUrl={imageData}
            onPhotoPick={this.handlePhotoPick}
          />

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

ProfileEdit.propTypes = {
  ...ReactNavigationPropTypes,
  user: PT.object.isRequired,
}

export default ProfileEdit
