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
                        color={"red"}
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
                        color={"blue"}
                        borderRadius={"L"}
                    />
                    <Block
                        onPress={this.handlePress}
                        value={"C"}
                        border={true}
                        color={"yellow"}
                    />
                    <Block
                        onPress={this.handlePress}
                        value={"R"}
                        border={"R"}
                        color={"orange"}
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
                        color={"green"}
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
    }
});
