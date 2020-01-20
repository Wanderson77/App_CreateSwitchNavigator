import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//import all the components we are going to use.
//For React Navigation Version 2+
//import {createSwitchNavigator} from 'react-navigation';
//For React Navigation Version 3+
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

//import createSwitchNavigator in our project
import FirstScreen from './screens/page1';
import SecondScreen from './screens/page2';

const App = createSwitchNavigator({
  //createSwitchNavigator will not store your old screen in stack like createStackNavigator
  //So all the screen that comes in createSwitchNavigator will appear once in a whole session
  FirstPage: { screen: FirstPage },
  SecondPage: { screen: SecondPage },
});
//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(App);