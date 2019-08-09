import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class WhiteScreen extends Component {
    render() {
        return <View style={styles.container} />;
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        position: "absolute"
    }
});
