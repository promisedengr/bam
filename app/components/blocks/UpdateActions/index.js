import React, { Component } from 'react'
import PT from 'prop-types'

import noop from 'lodash/noop'

import { Container } from './styles'

const OPTION_IDS = {
  cancel: 'Cancel',
  edit: 'Edit',
}

class UpdateActions extends Component {
  getSheetProps = () => ({
    options: [
      { id: OPTION_IDS.edit, label: 'Edit' },
      { id: OPTION_IDS.cancel, label: 'Cancel' },
    ],
    disabledIds: [OPTION_IDS.edit],
    cancelButtonIndex: 1,
  })

  handlePress = option => {
    switch (option.id) {
      // case OPTION_IDS.edit:
      //   return this.edit()
      default:
        return null
    }
  }

  handleSelect = () => {}

  render() {
    const { innerRef } = this.props

    return (
      <Container
        {...this.getSheetProps()}
        ref={innerRef}
        title="Update"
        onPress={this.handlePress}
        onSelect={this.handleSelect}
      />
    )
  }
}

UpdateActions.propTypes = {
  innerRef: PT.func,
}

UpdateActions.defaultProps = {
  innerRef: noop,
}

export { UpdateActions }
