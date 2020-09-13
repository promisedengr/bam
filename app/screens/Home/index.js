import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getViewer } from 'store/selectors/viewer'

import Component from './Home'

const SELECTOR = createStructuredSelector({
  viewer: getViewer,
})

export default connect(SELECTOR)(Component)
