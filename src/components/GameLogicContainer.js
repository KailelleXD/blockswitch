import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import {
    addToInputLogger,
    highlightTopBlock,
    highlightRightBlock,
    highlightBottomBlock,
    highlightLeftBlock,
    highlightCenterBlock
} from "../actions";
import Cross from "../components/Cross";
import { ButtonWrapper, Button } from "./common";

class GameLogicContainer extends Component {
    // function to pass in as props and return type and value from the component that the user pressed.
    handlePress = value => {
        // The following function is used to console log user input to help debug.
        this.userInputLogger(value);
        this.highlightBlock(value);
    };

    // RENDER FUNCTIONS ////

    // Function to highlight a selected block for 'x' seconds.
    highlightBlock = value => {
        const highlightDuration = 250;
        switch (value) {
            case "T":
                this.props.highlightTopBlock(true);
                setTimeout(() => {
                    this.props.highlightTopBlock(false);
                }, highlightDuration);
                break;
            case "R":
                this.props.highlightRightBlock(true);
                setTimeout(() => {
                    this.props.highlightRightBlock(false);
                }, highlightDuration);
                break;
            case "B":
                this.props.highlightBottomBlock(true);
                setTimeout(() => {
                    this.props.highlightBottomBlock(false);
                }, highlightDuration);
                break;
            case "L":
                this.props.highlightLeftBlock(true);
                setTimeout(() => {
                    this.props.highlightLeftBlock(false);
                }, highlightDuration);
                break;
            case "C":
                this.props.highlightCenterBlock(true);
                setTimeout(() => {
                    this.props.highlightCenterBlock(false);
                }, highlightDuration);
                break;
        }
    };

    // HELPER FUNCTIONS ////

    // Function to log all user input for debugging and developer screen.
    userInputLogger = value => {
        this.props.addToInputLogger(value);
    };

    TBD = () => {
        const randomNumber = this.getRandomInt(1, 5);
        switch (randomNumber) {
            case 1:
                console.log("T");
                break;
            case 2:
                console.log("R");
                break;
            case 3:
                console.log("B");
                break;
            case 4:
                console.log("L");
                break;
            case 5:
                console.log("C");
                break;
        }
    };

    // Function to get a random integer from 'min' through 'max'.
    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    render() {
        return (
            <View style={styles.container}>
                <Cross onPress={this.handlePress} />
                <ButtonWrapper function={this.TBD}>
                    <Button
                        text={"Generate Random Number"}
                        color={"#FFF8DC"}
                        backgroundColor={"#A0522D"}
                        width={"90%"}
                        borderColor={"#FFF8DC"}
                    />
                </ButtonWrapper>
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

const mapStateToProps = state => {
    const {
        addToInputLogger,
        highlightTopBlock,
        highlightRightBlock,
        highlightBottomBlock,
        highlightLeftBlock,
        highlightCenterBlock
    } = state;

    // console.log(state);

    return {
        state: state.dev,
        addToInputLogger,
        highlightTopBlock,
        highlightRightBlock,
        highlightBottomBlock,
        highlightLeftBlock,
        highlightCenterBlock
    };
};

const GameLogicContainerWithNavigation = withNavigation(GameLogicContainer);

export default connect(
    mapStateToProps,
    {
        addToInputLogger,
        highlightTopBlock,
        highlightRightBlock,
        highlightBottomBlock,
        highlightLeftBlock,
        highlightCenterBlock
    }
)(GameLogicContainerWithNavigation);
