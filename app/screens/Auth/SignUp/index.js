import { connect } from 'react-redux'

import { AuthCreators } from 'store/actions/auth'

import Component from './SignUp'

const ACTIONS = {
  onSignUp: AuthCreators.signUpRequest,
}

export default connect(
  null,
  ACTIONS,
)(Component)
