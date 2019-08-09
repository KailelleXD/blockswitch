import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { addToInputLogger } from "../actions";
import Cross from "../components/Cross";

class GameLogicContainer extends Component {
    // function to pass in as props and return type and value from the component that the user pressed.
    handlePress = value => {
        // The following function is used to console log user input to help debug.
        this.userInputLogger(value);
    };

    // HELPER FUNCTIONS ////

    // Function to log all user input for debugging and developer screen.
    userInputLogger = value => {
        this.props.addToInputLogger(value);
    };

    render() {
        return (
            <View style={styles.container}>
                <Cross onPress={this.handlePress} />
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
    const { addToInputLogger } = state;

    // console.log(state);

    return { state: state.devState, addToInputLogger };
};

const GameLogicContainerWithNavigation = withNavigation(GameLogicContainer);

export default connect(
    mapStateToProps,
    { addToInputLogger }
)(GameLogicContainerWithNavigation);
