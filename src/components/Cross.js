import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Block from "./Block";

export default class Cross extends Component {
    handlePress = value => {
        this.props.onPress(value);
    };

    render() {
        return (
            <View>
                <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                >
                    <Block
                        onPress={this.handlePress}
                        value={"T"}
                        border={"T"}
                        color={styles.darkRed}
                        borderRadius={"T"}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Block
                        onPress={this.handlePress}
                        value={"L"}
                        border={"L"}
                        color={styles.darkBlue}
                        borderRadius={"L"}
                    />
                    <Block
                        onPress={this.handlePress}
                        value={"C"}
                        border={true}
                        color={styles.goldenRod}
                    />
                    <Block
                        onPress={this.handlePress}
                        value={"R"}
                        border={"R"}
                        color={styles.orangeRed}
                        borderRadius={"R"}
                    />
                </View>
                <View
                    style={{ alignItems: "center", justifyContent: "center" }}
                >
                    <Block
                        onPress={this.handlePress}
                        value={"B"}
                        border={"B"}
                        color={styles.darkGreen}
                        borderRadius={"B"}
                    />
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
