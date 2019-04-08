import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Grid, Col, Row } from "react-native-easy-grid";
import Block from "./Block";

export default class Cross extends Component {
  render() {
    return (
      <View>
        <Row size={33}>
        <Block color={styles.darkRed} />
        </Row>
        <Row size={33}>
          <Block color={styles.darkBlue} />
          <Block color={styles.goldenRod} />
          <Block color={styles.orangeRed} />
        </Row>
        <Row size={33}>
            <Block color={styles.darkGreen} />
        </Row>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  darkRed: {
    backgroundColor: "#8B0000"
  },
  darkBlue: {
    backgroundColor: "#00008B"
  },
  goldenRod: {
    backgroundColor: "#DAA520"
  },
  orangeRed: {
    backgroundColor: "#FF4500"
  },
  darkGreen: {
    backgroundColor: "#006400"
  }
});
