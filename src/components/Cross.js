import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Block from './Block'

export default class Cross extends Component {
  render() {
    return (
      <View>
        <Block color={styles.darkBlue} />
        <Block color={styles.goldenRod} />
        <Block color={styles.orangeRed} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  darkRed: {
    backgroundColor: '#8B0000'
  },
  darkBlue: {
    backgroundColor: '#00008B'
  },
  goldenRod: {
    backgroundColor: '#DAA520'
  },
  orangeRed: {
    backgroundColor: '#FF4500'
  },
  darkGreen: {
    backgroundColor: '#006400'
  }
})
