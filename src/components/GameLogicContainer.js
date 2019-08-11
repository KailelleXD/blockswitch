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
    highlightCenterBlock,
    addToForwardPatternArray,
    setDisplayPattern
} from "../actions";
import Cross from "../components/Cross";
import { ButtonWrapper, Button } from "./common";

class GameLogicContainer extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.forwardPatternArray != nextProps.forwardPatternArray;
    }

    componentDidUpdate() {
        this.renderPatternToCross(this.props.forwardPatternArray);
    }

    // function to pass in as props and return type and value from the component that the user pressed.
    handlePress = value => {
        // The following function is used to console log user input to help debug.
        this.userInputLogger(value);
        this.highlightBlock(value);
    };

    // RENDER FUNCTIONS ////

    // Used to clean up render function, contains the common components { ButtonWrapper, Button } with necessary passed in props.
    displayTBDButton = () => {
        return (
            <ButtonWrapper function={this.TBD}>
                <Button
                    text={"Generate Next Block & Display Pattern"}
                    color={"#FFF8DC"}
                    backgroundColor={"#A0522D"}
                    width={"90%"}
                    borderColor={"#FFF8DC"}
                    marginTop={"1%"}
                />
            </ButtonWrapper>
        );
    };

    // Used to clean up render function, contains the common components { ButtonWrapper, Button } with necessary passed in props.
    displayHighlightTestButton = () => {
        return (
            <ButtonWrapper
                function={() => {
                    const highlightTestArray = ["T", "R", "B", "L", "C"];
                    this.renderPatternToCross(highlightTestArray);
                }}
            >
                <Button
                    text={"Button Highlight Test"}
                    color={"#FFF8DC"}
                    backgroundColor={"#008080"}
                    width={"90%"}
                    borderColor={"#FFF8DC"}
                    marginTop={".1%"}
                />
            </ButtonWrapper>
        );
    };

    // Used to clean up render function, contains the common components { ButtonWrapper, Button } with necessary passed in props.
    displayHighlightToggleButton = () => {
        return (
            <ButtonWrapper
                function={() => {
                    this.props.highlightTopBlock(
                        this.props.blockState.top ? false : true
                    );
                    this.props.highlightRightBlock(
                        this.props.blockState.top ? false : true
                    );
                    this.props.highlightBottomBlock(
                        this.props.blockState.top ? false : true
                    );
                    this.props.highlightLeftBlock(
                        this.props.blockState.top ? false : true
                    );
                    this.props.highlightCenterBlock(
                        this.props.blockState.top ? false : true
                    );
                }}
            >
                <Button
                    text={"Button Highlight Toggle"}
                    color={"#FFF8DC"}
                    backgroundColor={"#800080"}
                    width={"90%"}
                    borderColor={"#FFF8DC"}
                    marginTop={".1%"}
                />
            </ButtonWrapper>
        );
    };

    // Function to highlight the current pattern on the cross component.
    renderPatternToCross = array => {
        if (array.length !== 0) {
            this.props.setDisplayPattern(true);
        }
        const delayDuration = 500; // MOVE-TO-STORE
        array.map((block, i) => {
            if (i > 0) {
                setTimeout(() => {
                    this.highlightBlock(block);
                }, delayDuration * i);
            } else {
                this.highlightBlock(block);
            }
            if (i === array.length - 1) {
                setTimeout(() => {
                    this.props.setDisplayPattern(false);
                }, delayDuration * array.length);
            }
        });
    };

    // Function to highlight a selected block for 'x' seconds.
    highlightBlock = value => {
        const highlightDuration = 250; // MOVE-TO-STORE
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
        if (this.props.displayPatternActive === false) {
            console.log(
                `Action Granted: displayPatternActive is currently, (${
                    this.props.displayPatternActive
                })`
            );

            const randomNumber = this.getRandomInt(1, 5);
            switch (randomNumber) {
                case 1:
                    this.props.addToForwardPatternArray("T");
                    break;
                case 2:
                    this.props.addToForwardPatternArray("R");
                    break;
                case 3:
                    this.props.addToForwardPatternArray("B");
                    break;
                case 4:
                    this.props.addToForwardPatternArray("L");
                    break;
                case 5:
                    this.props.addToForwardPatternArray("C");
                    break;
            }
        } else {
            console.log(
                `Action Denied: displayPatternActive is currently, (${
                    this.props.displayPatternActive
                })`
            );
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
                {this.displayTBDButton()}
                {this.displayHighlightTestButton()}
                {this.displayHighlightToggleButton()}
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
        highlightCenterBlock,
        addToForwardPatternArray,
        setDisplayPattern
    } = state;

    // console.log(state);

    return {
        forwardPatternArray: state.gameState.forwardPatternArray,
        displayPatternActive: state.gameState.displayPatternActive,
        blockState: state.display.blockState,
        addToInputLogger,
        highlightTopBlock,
        highlightRightBlock,
        highlightBottomBlock,
        highlightLeftBlock,
        highlightCenterBlock,
        addToForwardPatternArray,
        setDisplayPattern
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
        highlightCenterBlock,
        addToForwardPatternArray,
        setDisplayPattern
    }
)(GameLogicContainerWithNavigation);
