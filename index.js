// @flow
import React from 'react'
import { Animated, StyleSheet } from 'react-native'

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

export default class SnackbarAvoidingView extends React.Component {
  state = {
    snackbarOffset: new Animated.Value(0)
  }

  avoidSnackbar({ spring, delay, height }: AnimationProps) {
    Animated.sequence([
      Animated.timing(this.state.snackbarOffset, {
        toValue: -height,
        duration: spring,
        useNativeDriver: true
      }),
      Animated.delay(delay),
      Animated.timing(this.state.snackbarOffset, {
        toValue: 0,
        duration: spring,
        useNativeDriver: true
      })
    ]).start()
  }

  render() {
    return (
      <Animated.View
        style={[styles.container, { transform: [{ translateY: this.state.snackbarOffset }]}]}
        pointerEvents="box-none"
      >
        {this.props.children}
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 0,
    width: '100%',
    height: '100%'
  }
})
