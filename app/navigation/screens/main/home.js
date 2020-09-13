import React from 'react'
import styled from 'styled-components/native'

import { main } from 'constants/routeNames'

import { userIcon } from 'images'

import { IconButton } from 'components/ui'
import Screen from 'screens/Home'

const ProfileButton = styled(IconButton).attrs({
  iconGlyph: userIcon,
})`
  height: 27;
  top: -8;
`

export default {
  [main.home]: {
    screen: Screen,

    navigationOptions: ({ navigation }) => {
      const handleProfilePress = () => {
        navigation.navigate({ routeName: main.profileShow })
      }

      return {
        title: 'Home',
        headerRight: <ProfileButton onPress={handleProfilePress} />, // eslint-disable-line
      }
    },
  },
}
