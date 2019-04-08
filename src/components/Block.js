import React, { Component } from 'react'
import { View } from 'react-native'
import EStyleSheet, { setStyleAttributePreprocessor } from 'react-native-extended-stylesheet'
 
export default class Block extends Component {

  // STYLE FUNCTIONS ////

  displayBorder() {
    if(this.props.border) {
      return styles.border;
    } else {
      return styles.noBorder;
    }
  }

  borderRadiusPosition() {
    switch(this.props.borderRadius) {
      // case "top": ,
      // case "right": ,
      // case "bottom": ,
      // case "left": ,
      // default: ,
    }
  }

  // --------------- ////

  render() {
    return (
      <View style={[styles.blockStyle, this.props.color, this.displayBorder()]} />
    )
  }
}

const styles = EStyleSheet.create({
  blockStyle: {
    margin: 0,
    width: '8rem',
    height: '8rem',
  },
  border: {
    borderWidth: 1,
    borderColor: '#000',
  },
  noBorder: {
    borderWidth: 0,
    borderColor: '#000',
  }
})
