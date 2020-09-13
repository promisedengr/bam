import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getViewer } from 'store/selectors/viewer'

import { ViewerCreators } from 'store/actions/viewer'

import Component from './Edit'

const SELECTOR = createStructuredSelector({
  user: getViewer,
})

const ACTIONS = {
  onEdit: ViewerCreators.editProfileRequest,
}

export default connect(
  SELECTOR,
  ACTIONS,
)(Component)
