import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Auditoria from './components/Auditoria';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Auditoria></Auditoria>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});