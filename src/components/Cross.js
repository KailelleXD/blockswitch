import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Block from "./Block";

export default class Cross extends Component {
  render() {
    return (
      <View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Block border={true} color={styles.darkRed} />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <Block border={true} color={styles.darkBlue} />
            <Block border={false} color={styles.goldenRod} />
            <Block border={true} color={styles.orangeRed} />
          </View>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Block border={true} color={styles.darkGreen} />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    justifyContent: "flex-start"
  },
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
