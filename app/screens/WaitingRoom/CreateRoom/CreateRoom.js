import React, { Component } from 'react'
import PT from 'prop-types'

import { Form, Field } from 'react-final-form'

import ValidationService from 'services/validation'

import { createOptions } from 'utils/form'

import data from 'constants/data'
import { ReactNavigationPropTypes } from 'constants/propTypes'
import { waitingRoom } from 'constants/routeNames'
import { GENDERS } from 'constants/waitingRoom'

import {
  Container,
  Scrollable,
  AvatarPicker,
  FormInner,
  FormContent,
  FormFooter,
  TextInput,
  Separator,
  Dropdown,
  Datepicker,
  Button,
} from './styles'

const waitingRoomGenderOptions = createOptions(data.waitingRoomGenders)

const getInitialState = () => ({
  imageFile: null,
  imageData: null,
})

class CreateRoom extends Component {
  state = getInitialState()

  getInitialValues = () => ({
    name: '',
    gender: GENDERS.unknown,
    expectedDate: '',
  })

  validate = values => {
    const constraints = {
      name: {
        presence: true,
        length: {
          minimum: 2,
          maximum: 25,
        },
      },
      gender: {
        presence: true,
      },
      expectedDate: {
        presence: {
          allowEmpty: false,
        },
      },
    }

    return ValidationService.validate(constraints, values)
  }

  handleSubmit = async values => {
    const { navigation, onCreate } = this.props
    const { imageFile } = this.state

    const response = await new Promise(resolve => {
      onCreate(
        values.name,
        values.gender,
        values.expectedDate,
        imageFile,
        resolve,
      )
    })

    if (response.ok) {
      const { id } = response.meta.data[0]

      navigation.navigate({
        routeName: waitingRoom.lobby,
        params: { title: values.name, roomId: id },
      })
    }
  }

  handlePhotoPick = ({ imageFile, imageData }) => {
    this.setState({ imageFile, imageData })
  }

  renderForm = ({ handleSubmit, invalid, submitting }) => {
    const { imageFile } = this.state

    return (
      <FormInner>
        <FormContent>
          <Field
            name="name"
            component={TextInput}
            label="Full name"
            placeholder="Baby name"
            isLast
          />

          <Separator />

          <Field
            name="gender"
            component={Dropdown}
            label="Gender"
            options={waitingRoomGenderOptions}
          />

          <Field
            name="expectedDate"
            component={Datepicker}
            label="Expected Due Date"
            placeholder="ex. 01/13/2020 (optional)"
            isLast
          />
        </FormContent>

        <FormFooter>
          <Button
            title="Create a Waiting Room"
            isDisabled={invalid || submitting || !imageFile}
            onPress={handleSubmit}
          />
        </FormFooter>
      </FormInner>
    )
  }

  render() {
    const { imageData } = this.state

    return (
      <Container>
        <Scrollable toBottom>
          <AvatarPicker
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

CreateRoom.propTypes = {
  ...ReactNavigationPropTypes,
  onCreate: PT.func.isRequired,
}

export default CreateRoom
