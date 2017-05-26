# React Native Snackbar Avoiding View
AvoidingView that adjusts when a snackbar is present

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
