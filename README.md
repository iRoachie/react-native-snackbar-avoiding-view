# React Native Snackbar Avoiding View
[![npm](https://img.shields.io/npm/v/react-native-snackbar-avoiding-view.svg?style=flat-square)](https://www.npmjs.com/package/react-native-snackbar-avoiding-view)
[![npm](https://img.shields.io/npm/dm/react-native-snackbar-avoiding-view.svg?style=flat-square)](https://www.npmjs.com/package/react-native-snackbar-avoiding-view)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

##### The Problem
Snackbar's appear at the bottom edge of the screen and overlay the content which sometimes is a Floating Action Button. However, the snackbar should not overlay the FAB according to the Material Design spec.

##### Solution
An AvoidingView that adjusts when a snackbar is present

![img](http://i.imgur.com/UvcnTLI.gif)

## Getting Started
#### Step 1

Install the component
```
npm install --save react-native-snackbar-avoiding-view
```

Or if you use yarn
```
yarn add react-native-snackbar-avoiding-view
```

##### Step 2
Use the component
```jsx
import SnackBarAvoidingView from 'react-native-snackbar-avoiding-view'

// Make a ref to the component
<SnackBarAvoidingView ref="avoidingView">
  <ActionButton />
</SnackBarAvoidingView>

// Show Snackbar and let the view avoid it
Snackbar.show({
  title: 'Heloooo',
  duration: Snackbar.LENGTH_LONG
})

this.refs.avoidingView.avoidSnackbar({
  spring: 200,
  delay: 2800,
  height: 40
})
```

## Methods
```jsx
avoidSnackbar(props)

// props is an object with 3 properties:
{ spring, delay, height }
```
| Property | Description |
| -- | -- |
| spring | Time it takes for the show/hide action |
| delay | Time to pause between the snackbar showing, then hiding |
| height | Height of the snackbar |

## Example
Clone the repo and run the Example project to see it in action
