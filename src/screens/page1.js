/** Comments
 * 
 */
import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';



export default class FirstPage extends Component {

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.TextStyle}>This is First Screen</Text>
        </View>
        <Button
          onPress={() => this.props.navigation.navigate('SecondPage')}
          //Click to go to second screen
          title="Go to Next Screen"
        />
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