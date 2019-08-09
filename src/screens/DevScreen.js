import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import EStyleSheet from "react-native-extended-stylesheet";
import { TextBox } from "../components/common/TextBox";
import ClearHistoryButton from "../components/ClearHistoryButton";
import DoubleTapScreenShot from "../utils/DoubleTapScreenShot";

class DevScreen extends Component {
    displayUserInputHistory() {
        const userInputHistoryMap = this.props.userInputHistory.map(
            (move, i) => {
                return `[${move}],`;
            }
        );
        return userInputHistoryMap;
    }

    render() {
        return (
            <View style={styles.container}>
                <DoubleTapScreenShot>
                    <View style={styles.insideContainer}>
                        <Text style={styles.textStyle}>
                            -----------------------
                        </Text>
                        <Text style={styles.textStyle}>Developer Screen</Text>
                        <Text style={styles.textStyle}>
                            -----------------------
                        </Text>
                        <Text style={styles.userInputHistoryStyle}>
                            {this.displayUserInputHistory()}
                        </Text>
                        <Text style={styles.textStyle}>
                            -----------------------
                        </Text>
                        <TextBox
                            placeholder={
                                "Please enter description of bug/issue.."
                            }
                        />
                        <ClearHistoryButton />
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
    userInputHistoryStyle: {
        fontSize: "1rem",
        fontWeight: "100",
        letterSpacing: ".25rem",
        color: "#fff",
        textAlign: "justify",
        paddingLeft: wp("5%")
    }
});

const mapStateToProps = state => {
    return {
        userInputHistory: state.devReducer.userInputHistory
    };
};

export default connect(mapStateToProps)(DevScreen);
