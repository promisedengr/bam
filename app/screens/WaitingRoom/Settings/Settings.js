import React, { Component } from 'react'
import PT from 'prop-types'

import { Form, Field } from 'react-final-form'

import forIn from 'lodash/forIn'
import get from 'lodash/get'
import map from 'lodash/map'

import { ReactNavigationPropTypes } from 'constants/propTypes'
import { main } from 'constants/routeNames'

import { SETTINGS } from 'constants/waitingRoom'

import {
  Container,
  Scrollable,
  FormInner,
  FormContent,
  FormFooter,
  Section,
  Meta,
  SectionTitle,
  SettingTitle,
  Separator,
  Switch,
  Button,
} from './styles'

class Settings extends Component {
  getInitialValues = () => {
    let values = {}

    forIn(SETTINGS, setting => {
      forIn(setting.preferences, preference => {
        values = {
          ...values,
          [preference.name]: preference.value,
        }
      })
    })

    return values
  }

  handleSubmit = () => {}

  handleEditProfilePress = () => {
    const { navigation } = this.props

    navigation.navigate({ routeName: main.profileEdit })
  }

  renderSection = sectionId => {
    const sectionKey = `#section${sectionId}`
    const title = get(SETTINGS[sectionId], 'title', '')
    const preferences = get(SETTINGS[sectionId], 'preferences', [])

    const preferencesEl = map(preferences, preference => (
      <Meta key={preference.id}>
        <SettingTitle>{preference.label}</SettingTitle>

        <Field
          name={preference.name}
          component={Switch}
          label={preference.label}
        />
      </Meta>
    ))

    return (
      <Section key={sectionKey}>
        <SectionTitle>{title}</SectionTitle>

        {preferencesEl}

        <Separator />
      </Section>
    )
  }

  renderForm = () => {
    const { onLogOut } = this.props

    const sectionsEl = map(SETTINGS, setting =>
      this.renderSection(setting.sectionId),
    )

    return (
      <FormInner>
        <FormContent>{sectionsEl}</FormContent>

        <FormFooter withoutSpace>
          <Button
            title="Edit Profile"
            onPress={this.handleEditProfilePress}
            variant="neutral"
            mb={4}
          />

          <Button title="Log Out" isLast onPress={onLogOut} />
        </FormFooter>
      </FormInner>
    )
  }

  render() {
    return (
      <Container>
        <Scrollable toBottom>
          <Form
            initialValues={this.getInitialValues()}
            render={this.renderForm}
            onSubmit={this.handleSubmit}
          />
        </Scrollable>
      </Container>
    )
  }
}

Settings.propTypes = {
  ...ReactNavigationPropTypes,
  onLogOut: PT.func.isRequired,
}

export default Settings
