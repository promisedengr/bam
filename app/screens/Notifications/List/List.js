import React, { Component } from 'react'
import PT from 'prop-types'

import { Container, Button } from './styles'

class List extends Component {
  handleLogOutPress = () => {
    this.props.onLogOut()
  }

  render() {
    return (
      <Container>
        <Button title="Log Out" onPress={this.handleLogOutPress} />
      </Container>
    )
  }
}

List.propTypes = {
  onLogOut: PT.func.isRequired,
}

export default List
