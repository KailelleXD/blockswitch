import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { withNavigation } from "react-navigation";
import Title from "../components/Title";
import GameLogicContainer from "../components/GameLogicContainer";
import DevScreenAccess from "../utils/DevScreenAccess";

class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <DevScreenAccess
                    function={() => {
                        this.props.navigation.navigate("DevScreen");
                    }}
                >
                    <Title />
                    <GameLogicContainer />
                </DevScreenAccess>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D2B48C"
    }
});

export default withNavigation(MainScreen);
