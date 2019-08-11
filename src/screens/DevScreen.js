import React, { Component } from "react";
import { View, Text } from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import EStyleSheet from "react-native-extended-stylesheet";
import { TextBox, Button, ButtonWrapper } from "../components/common";
import DoubleTapScreenShot from "../utils/DoubleTapScreenShot";
import { resetGame, clearUserLogs, clearPatterns } from "../actions";

class DevScreen extends Component {
    // RENDER FUNCTIONS ////

    // Used to clean up render function, contains formatted text and user input logs.
    displayDevScreenText = () => {
        return (
            <View>
                <Text style={styles.textStyle}>-----------------------</Text>
                <Text style={styles.textStyle}>Developer Screen</Text>
                <Text style={styles.textStyle}>-----------------------</Text>
                <Text style={styles.userInputLogStyle}>
                    {this.displayUserInputLog()}
                </Text>
                <Text style={styles.textStyle}>-----------------------</Text>
            </View>
        );
    };

    // Used to clean up render function, contains the common components { ButtonWrapper, Button } with necessary passed in props.
    displayClearUserLogsButton = () => {
        return (
            <ButtonWrapper function={this.handlePress} opacity={0.8}>
                <Button
                    text={"Clear History & Reset Game"}
                    width={"90%"}
                    backgroundColor={"#A0522D"}
                    color={"#FFF8DC"}
                    borderColor={"#FFF8DC"}
                />
            </ButtonWrapper>
        );
    };

    displayUserInputLog = () => {
        const userInputLogMap = this.props.userInputLog.map((move, i) => {
            return `[${move}],`;
        });
        return userInputLogMap;
    };

    // HELPER FUNCTIONS ////
    handlePress = () => {
        this.props.clearUserLogs();
        this.props.clearPatterns();
        this.props.resetGame();
        this.props.navigation.navigate("MainScreen");
    };

    render() {
        return (
            <View style={styles.container}>
                <DoubleTapScreenShot>
                    <View style={styles.insideContainer}>
                        {this.displayDevScreenText()}
                        <TextBox
                            placeholder={
                                "Please enter description of bug/issue.."
                            }
                        />
                        {this.displayClearUserLogsButton()}
                        <Text style={styles.doubleTapStyle}>
                            ( Double-tap to take a screenshot! )
                        </Text>
                    </View>
                </DoubleTapScreenShot>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        backgroundColor: "#D2B48C",
        flex: 1,
        justifyContent: "center",
        paddingBottom: hp("5%")
    },
    insideContainer: {
        flex: 1,
        justifyContent: "center"
    },
    textStyle: {
        fontSize: "1rem",
        fontWeight: "bold",
        letterSpacing: ".25rem",
        color: "#fff",
        textAlign: "center"
    },
    doubleTapStyle: {
        fontSize: "1rem",
        fontWeight: "100",
        letterSpacing: ".1rem",
        color: "#fff",
        textAlign: "center",
        paddingTop: hp("1%")
    },
    userInputLogStyle: {
        fontSize: "1rem",
        fontWeight: "100",
        letterSpacing: ".25rem",
        color: "#fff",
        textAlign: "justify",
        paddingLeft: wp("5%")
    }
});

const mapStateToProps = state => {
    const { resetGame, clearUserLogs, clearPatterns } = state;
    return {
        userInputLog: state.dev.userInputLog,
        resetGame,
        clearUserLogs,
        clearPatterns
    };
};

const DevScreenWithNavigation = withNavigation(DevScreen);

export default connect(
    mapStateToProps,
    { resetGame, clearUserLogs, clearPatterns }
)(DevScreenWithNavigation);
