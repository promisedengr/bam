import PT from 'prop-types'
import { Image } from 'react-native'

export { ViewPropTypes } from 'react-native'

export const ImagePropTypes = Image.propTypes

export const FinalFormPropTypes = {
  input: PT.shape({
    onChange: PT.func.isRequired,
  }),
  meta: PT.shape({
    error: PT.oneOfType([PT.string, PT.array]),
    touched: PT.bool.isRequired,
  }),
}

export const ReactNavigationPropTypes = {
  navigation: PT.shape({
    dispatch: PT.func.isRequired,
  }),
  scene: PT.shape({
    descriptor: PT.shape({
      options: PT.object.isRequired,
    }).isRequired,
  }),
}
