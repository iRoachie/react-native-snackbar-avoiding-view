// Type definitions for react-native-snackbar-avoiding-view
// Project: https://github.com/iRoachie/react-native-snackbar-avoiding-view
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// TypeScript Version: 2.3.2

import React from 'react'

interface AnimationProps {
  /**
   * Height of the snackbar
   */
  height: number | string

  /**
   * Time to pause between the snackbar showing, then hiding
   */
  delay: number

  /**
   * Time it takes for the show/hide action
   */
  spring: number
}

export default class SnackbarAvoidingView extends React.Component<null, null> { 
  /**
   * Move the view upwards to avoid the snackbar
   * @param props 
   */
  avoidSnackbar(props: AnimationProps): void
}
