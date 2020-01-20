/** Comments
 * 
 */
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default class SecondPage extends Component {

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.TextStyle}>This is Second Screen</Text>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },
  TextStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
});