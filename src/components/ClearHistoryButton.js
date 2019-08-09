import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import EStyleSheet from "react-native-extended-stylesheet";
import { resetGameState, clearHistory } from "../actions";

class ClearHistoryButton extends Component {
    handlePress = () => {
        this.props.clearHistory();
        // this.props.resetGameState();
        this.props.navigation.navigate("MainScreen");
    };

    render() {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={this.handlePress}>
                <Text style={[styles.buttonStyle, styles.container]}>
                    Clear History & Reset Game
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        width: wp("90%"),
        alignSelf: "center"
    },
    buttonStyle: {
        fontSize: "1rem",
        backgroundColor: "#A0522D",
        textAlign: "center",
        paddingVertical: ".75rem",
        color: "#FFF8DC",
        borderWidth: wp(".5%"),
        borderRadius: wp("2%"),
        borderColor: "#FFF8DC"
    }
});

const mapStateToProps = state => {
    const { resetGameState, clearHistory } = state;
    return {
        resetGameState,
        clearHistory
    };
};

const ClearHistoryButtonWithNavigation = withNavigation(ClearHistoryButton);

export default connect(
    mapStateToProps,
    { resetGameState, clearHistory }
)(ClearHistoryButtonWithNavigation);
