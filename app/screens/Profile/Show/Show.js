import React, { Component } from 'react'
import PT from 'prop-types'

import get from 'lodash/get'

import { userFullName } from 'utils/user'

import { ReactNavigationPropTypes } from 'constants/propTypes'
import { DASH } from 'constants/symbols'
import { main } from 'constants/routeNames'

import {
  Container,
  Scrollable,
  Content,
  Footer,
  Header,
  Avatar,
  FullName,
  Separator,
  Button,
  Row,
  RowLabel,
  RowValue,
  Verification,
} from './styles'

class ProfileShow extends Component {
  handleEditPress = () => {
    const { navigation } = this.props
    navigation.navigate({ routeName: main.profileEdit })
  }

  render() {
    const { user, navigation } = this.props
    const pPhone = get(
      user,
      'profile.pendingPrimaryPhoneNumber.internationalFormat',
    )
    const vPhone = get(
      user,
      'profile.verifiedPrimaryPhoneNumber.internationalFormat',
    )

    const phone = pPhone || vPhone || DASH

    return (
      <Container>
        <Scrollable toBottom>
          <Content>
            <Header>
              <Avatar photo={get(user, 'profile.avatar')} />
              <FullName>{userFullName(user)}</FullName>
            </Header>

            <Separator />

            <Row>
              <RowLabel>Email:</RowLabel>
              <RowValue>{get(user, 'profile.email', DASH)}</RowValue>
            </Row>

            <Row isLast>
              <RowLabel>Phone:</RowLabel>
              <RowValue>{phone}</RowValue>
            </Row>

            <Separator />

            <Verification user={user} navigation={navigation} />

            <Separator />
          </Content>

          <Footer>
            <Button
              title="Edit Profile"
              isLast
              onPress={this.handleEditPress}
            />
          </Footer>
        </Scrollable>
      </Container>
    )
  }
}

ProfileShow.propTypes = {
  ...ReactNavigationPropTypes,
  user: PT.object.isRequired,
}

export default ProfileShow
