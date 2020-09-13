import { connect } from 'react-redux'

import { AuthCreators } from 'store/actions/auth'

import Component from './List'

const ACTIONS = {
  onLogOut: AuthCreators.logOutRequest,
}

export default connect(
  null,
  ACTIONS,
)(Component)
