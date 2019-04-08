import React, { Component } from 'react'
import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
 
export default class Block extends Component {
  render() {
    return (
      <View style={[styles.blockStyle, this.props.color]} />
    )
  }
}

const styles = EStyleSheet.create({
  blockStyle: {
    width: '8rem',
    height: '8rem',
    borderWidth: 1,
    borderColor: '#000'
  }
})
