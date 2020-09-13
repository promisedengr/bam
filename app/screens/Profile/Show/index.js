import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getViewer } from 'store/selectors/viewer'

import Component from './Show'

const SELECTOR = createStructuredSelector({
  user: getViewer,
})

export default connect(SELECTOR)(Component)
