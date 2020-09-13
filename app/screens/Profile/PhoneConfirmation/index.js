import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getViewer } from 'store/selectors/viewer'

import { ViewerCreators } from 'store/actions/viewer'

import Component from './PhoneConfirmation'

const SELECTOR = createStructuredSelector({
  user: getViewer,
})

const ACTIONS = {
  onSend: ViewerCreators.sendPhoneNumberCodeRequest,
  onConfirm: ViewerCreators.verifyPhoneNumberRequest,
}

export default connect(
  SELECTOR,
  ACTIONS,
)(Component)
