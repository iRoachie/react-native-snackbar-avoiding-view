// @flow
import React from 'react'
import { Animated } from 'react-native'

type AnimationProps = {
  /**
   * Time it takes for the show/hide action
   */
  spring: number,
  /**
   * Time to pause between the snackbar showing, then hiding
   */
  delay: number,

  /**
   * Height of the snackbar
   */
  height: number
}

export default class SnackBarAvoidingView extends React.Component {
  state = {
    offset: new Animated.Value(0)
  }
  
  avoidSnackbar({ spring, delay, height }: AnimationProps) {
    const animation = Animated.sequence([
      Animated.timing(this.state.snackbarOffset, {
        toValue: height,
        duration: spring
      }),
      Animated.delay(delay),
      Animated.timing(this.state.snackbarOffset, {
        toValue: 0,
        duration: spring
      })
    ])

    animation.start()
  }

  render() {
    return (
      <Animated.View style={{ marginBottom: this.state.offset }}>
        {this.props.children}
      </Animated.View>
    );
  }
}
