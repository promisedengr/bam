import styled, { css } from 'styled-components/native'
import { fontSize, space } from 'styled-system'

import PickingService from 'services/picking'

import { hitSlopArea } from 'utils/presentational'

import {
  getSpace,
  getColor,
  borderCornerRadius,
  fontFamilyComplex,
  lineHeightComplex,
} from 'theme'
import { pictureIcon, crossIcon } from 'images'

import { Box, Image, Icon, IconButton } from 'components/ui'

import { COMPOSER_TOP_PADDING } from '../constants'

export { PhotoUploadActions } from '../../PhotoUploadActions'

export const Container = styled(Box).attrs({
  btlr: 4,
  bblr: 4,
  borderColor: 'dustyGray',
})`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-right-width: 0px;
`

export const Input = styled.TextInput.attrs(props => ({
  accessible: true,
  accessibilityLabel: props.placeholder,
  multiline: true,
  keyboardAppearance: 'default',
  underlineColorAndroid: 'transparent',
  enablesReturnKeyAutomatically: true,
  selectionColor: getColor('pinkSalmon')(props),
  placeholderTextColor: getColor('silver')(props),
  pt: 0,
  pb: 0,
  mr: 4,
  ml: props.hasAttachment ? 0 : 4,
  fontSize: 0,
  fontFamilyGroup: 'groups.montserrat',
  fontFamilyStyle: 'styles.regular',

  ...PickingService.platform({
    android: {
      textAlignVertical: 'center',
    },
  }),
}))`
  flex: 1;

  ${space}
  ${fontSize}
  ${lineHeightComplex}
  ${fontFamilyComplex}
  ${borderCornerRadius}

  ${props =>
    PickingService.platform({
      ios:
        props.isSingleLined &&
        css`
          padding-top: ${COMPOSER_TOP_PADDING};
        `,
    })}
`

export const AttachmentButton = styled(IconButton).attrs(props => ({
  iconGlyph: pictureIcon,
  iconTintColor: 'pinkSalmon',
  iconSize: 18,
  hitSlop: hitSlopArea(getSpace(3)(props)),
  pl: 12, // NOTE: Custom space
  pr: 3,
}))`
  align-self: stretch;
  align-items: center;
  justify-content: center;

  ${space}
`

export const Attachment = styled(Box).attrs({
  my: 3,
  mr: 3,
  ml: 2,
  activeOpacity: 0.7,
})`
  width: 36px;
  aspect-ratio: 1;
`

export const AttachmentImage = styled(Image).attrs({
  resizeMode: 'cover',
  contentType: 'l',
})`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 18px;
`

export const AttachmentDeleteIconContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
`

export const AttachmentDeleteIcon = styled(Icon).attrs({
  glyph: crossIcon,
  tintColor: 'pinkSalmon',
  size: 18,
})``
