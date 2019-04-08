import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import Cross from './src/components/Cross'
import EStyleSheet from 'react-native-extended-stylesheet';

// define REM depending on screen width
const {width} = Dimensions.get('window');
const rem = width > 340 ? 18 : 17;

// calc styles
EStyleSheet.build({
  $rem: rem,
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Cross />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
