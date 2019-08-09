import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, PanResponder, Animated } from "react-native";

export default class DevScreenAccess extends Component {
    constructor(props) {
        super(props);

        this.state = {
            longPress: false
        };

        let timer;
        this.timer = timer;
    }

    componentWillMount() {
        this.gestureHandlers = PanResponder.create({
            onStartShouldSetPanResponder: this
                ._handleStartShouldSetPanResponder,
            onPanResponderGrant: this._handlePanResponderGrant,
            onPanResponderMove: this._handlePanResponderMove,
            onPanResponderRelease: this._handlePanResponderEnd,
            onPanResponderTerminationRequest: evt => true,
            onShouldBlockNativeResponder: evt => false
        });
    }

    _handleStartShouldSetPanResponder = (event, gesture) => {
        this.longPress(event);
        return true;
    };

    _handlePanResponderGrant = (event, gesture) => {};

    _handlePanResponderEnd = (event, gesture) => {
        this.cancelLongPress();
        if (this.state.longPress === false) {
            console.log("longPress function cancelled.");
        }
    };

    // HELPER FUNCTIONS ////

    //----------------------------------------------------------------------------
    // Function to take function being passed in.
    handleLongPress = () => {
        console.log(`handleLongPress function has been called..`);
        this.props.devFunction();
    };

    //----------------------------------------------------------------------------
    // Function to determine if press is longer than 2 sec.
    longPress = event => {
        console.log("longPressTimer started");
        this.longPressTimer = setTimeout(() => {
            this.setState(
                {
                    longPress: true
                },
                () => {
                    console.log(`longPress:${this.state.longPress}`);
                }
            );
            this.longPressTimer = "end";
            console.log("longPressTimer complete");
            this.handleLongPress();
        }, 1500);
    };

    cancelLongPress = () => {
        if (this.longPressTimer != "end") {
            clearTimeout(this.longPressTimer);
            console.log("Timeout process cancelled.");
            this.setState(
                {
                    longPress: false
                },
                () => {
                    console.log(`longPress:${this.state.longPress}`);
                }
            );
        }
    };
    //----------------------------------------------------------------------------

    render() {
        return (
            <Animated.View
                {...this.gestureHandlers.panHandlers}
                style={styles.container}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
