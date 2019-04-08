import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Block from './src/components/Block'
import EStyleSheet from 'react-native-extended-stylesheet';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Block />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
