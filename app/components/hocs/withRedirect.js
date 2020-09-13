import React, { PureComponent } from 'react'

import debounce from 'lodash/debounce'
import identity from 'lodash/identity'
import noop from 'lodash/noop'

const Nullable = () => null

const withRedirect = (composer = identity, redirector = noop) => (
  WrappedComponent = Nullable,
) => {
  class Redirect extends PureComponent {
    redirector = debounce(redirector, 100)

    componentWillMount() {
      this.redirector(this.props)
    }

    componentDidUpdate() {
      this.redirector(this.props)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  const Wrapper = composer(Redirect)
  Wrapper.router = WrappedComponent.router
  Wrapper.navigationOptions = WrappedComponent.navigationOptions
  return Wrapper
}

export { withRedirect }
