import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { NavigationActions } from 'react-navigation'

import { app, navigators } from 'constants/routeNames'

import { isAuthenticated } from 'store/selectors/session'

import { withRedirect } from 'components/hocs'
import Screen from 'screens/Progress'

const SELECTOR = createStructuredSelector({
  isAuthenticated,
})

const COMPOSER = connect(SELECTOR)

const privateFlow = props => {
  return props.navigation.dispatch(
    NavigationActions.navigate({ routeName: navigators.main }),
  )
}

const publicFlow = props => {
  return props.navigation.dispatch(
    NavigationActions.navigate({ routeName: navigators.auth }),
  )
}

const REDIRECTOR = props =>
  props.isAuthenticated ? privateFlow(props) : publicFlow(props)

export default {
  [app.redirector]: {
    screen: withRedirect(COMPOSER, REDIRECTOR)(Screen),
  },
}
