import { connect } from 'react-redux'

import { AuthCreators } from 'store/actions/auth'

import Component from './Settings'

const ACTIONS = {
  onLogOut: AuthCreators.logOutRequest,
}

export default connect(
  null,
  ACTIONS,
)(Component)
