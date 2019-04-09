import React, { Component } from 'react'
import { View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
 
export default class Block extends Component {

  // STYLE FUNCTIONS ////

  displayBorder() {
    switch(this.props.border) {
      case "T":
        return border.top;
      case "R":
        return border.right;
      case "B":
        return border.bottom;
      case "L":
        return border.left;
      case true:
        return border.all;
      case false:
        return border.none;
      default:
        return null;
    }
  }

  borderRadiusPosition() {
    switch(this.props.borderRadius) {
      case "T":
        return radius.cornerTop;
      case "R":
        return radius.cornerRight;
      case "B":
        return radius.cornerBottom;
      case "L":
        return radius.cornerLeft;
      case "TL":
        return radius.cornerTL;
      case "TR":
        return radius.cornerTR;
      case "BL":
        return radius.cornerBL;
      case "BR":
        return radius.cornerBR;
      case "OTL":
        return radius.cornerOTL;
      case "OTR":
        return radius.cornerOTR;
      case "OBL":
        return radius.cornerOBL;
      case "OBR":
        return radius.cornerOBR;
      case "All":
        return radius.cornerAll;
      default:
        return null;

    }
  }

  // --------------- ////

  render() {
    return (
      <View
        style={[
          styles.blockStyle, 
          this.props.color, 
          this.displayBorder(), 
          this.borderRadiusPosition()
          ]} />
    )
  }
}

const styles = EStyleSheet.create({
  blockStyle: {
    margin: 0,
    width: '7rem',
    height: '7rem',
  }
})

const border = EStyleSheet.create({
  top: {
    borderWidth: '.25rem',
    borderColor: '#000',
    borderBottomWidth: 0,
  },
  right: {
    borderWidth: '.25rem',
    borderColor: '#000',
    borderLeftWidth: 0,
  },
  bottom: {
    borderWidth: '.25rem',
    borderColor: '#000',
    borderTopWidth: 0,
  },
  left: {
    borderWidth: '.25rem',
    borderColor: '#000',
    borderRightWidth: 0,
  },
  all: {
    borderWidth: '.25rem',
    borderColor: '#000',
  },
  none: {
    borderWidth: 0,
    borderColor: '#000',
  }
})

const radius = EStyleSheet.create({
  cornerTop: {
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem'
  },
  cornerRight: {
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem'
  },
  cornerBottom: {
    borderBottomRightRadius: '1rem',
    borderBottomLeftRadius: '1rem'
  },
  cornerLeft: {
    borderBottomLeftRadius: '1rem',
    borderTopLeftRadius: '1rem'
  },
  cornerTL: {
    borderTopLeftRadius: '1rem'
  },
  cornerTR: {
    borderTopRightRadius: '1rem'
  },
  cornerBL: {
    borderBottomLeftRadius: '1rem'
  },
  cornerBR: {
    borderBottomRightRadius: '1rem'
  },
  cornerOTL: {
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',
    borderBottomLeftRadius: '1rem'
  },
  cornerOTR: {
    borderTopLeftRadius: '1rem',
    borderBottomRightRadius: '1rem',
    borderBottomLeftRadius: '1rem'
  },
  cornerOBL: {
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem'
  },
  cornerOBR: {
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    borderBottomLeftRadius: '1rem'
  },
  cornerAll: {
    borderRadius: '1rem'
  }
})
