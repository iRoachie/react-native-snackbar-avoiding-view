/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SnackbarAvoidingView from 'react-native-snackbar-avoiding-view'
import { ActionButton, Button, ThemeProvider } from 'react-native-material-ui'
import Snackbar from 'react-native-snackbar'

export default class Test extends Component {
  showSnackbar() {
    Snackbar.show({
      title: 'That\' right FAB, move!',
      duration: Snackbar.LENGTH_LONG
    })

    this.refs.avoidingView.avoidSnackbar({
      spring: 200, 
      delay: 2800,
      height: 40
    })
  }

  render() {
    return (
      <ThemeProvider>
        <View style={styles.container}>
          <Button text="Open Snackbar" onPress={this.showSnackbar.bind(this)}/>

          <SnackbarAvoidingView ref="avoidingView">
            <ActionButton onPress={() => alert('a')}/>
          </SnackbarAvoidingView>
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('example', () => Test);
