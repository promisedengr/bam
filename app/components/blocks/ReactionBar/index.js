import React, { Component } from 'react'

import { ViewPropTypes } from 'constants/propTypes'

import { Container, Reaction } from './styles'

class ReactionBar extends Component {
  state = {}

  render() {
    const { style } = this.props

    return (
      <Container style={style}>
        <Reaction count={0} />
        <Reaction count={1} />
        <Reaction count={2} />
        <Reaction count={3} />
        <Reaction count={4} isLast />
      </Container>
    )
  }
}

ReactionBar.propTypes = {
  style: ViewPropTypes.style,
}

ReactionBar.defaultProps = {
  style: {},
}

export { ReactionBar }

// const emoticonsEl = size(emoticons) > 0 && (
//   <Emoticons>
//     {map(emoticons, emoticon => (
//       <Emoticon
//         key={`emoticon-${emoticon.id}`}
//         icon={emoticon.icon}
//         count={emoticon.count}
//         onPress={this.handlePressEmoticon}
//       />
//     ))}
//   </Emoticons>
// )
