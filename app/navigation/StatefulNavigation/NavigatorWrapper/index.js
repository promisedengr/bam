import { connect } from 'react-redux'

import { AppCreators } from 'store/actions/app'

import Component from './NavigatorWrapper'

const ACTIONS = {
  onDeepLinkMatched: AppCreators.deepLinkMatched,
}

export default connect(
  null,
  ACTIONS,
)(Component)
