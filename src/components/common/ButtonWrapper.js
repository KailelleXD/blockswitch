import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

/*
Available props to use with this component: 
    function,
    opacity,
    borderRadius
*/

class ButtonWrapper extends Component {
    handlePress = () => {
        // If no function is passed in through props, return null instead of undefined.
        return this.props.function !== undefined ? this.props.function() : null;
    };

    render() {
        return (
            <TouchableOpacity
                activeOpacity={this.props.opacity}
                onPress={this.handlePress}
                style={{
                    borderRadius: wp(this.props.borderRadius || "2%")
                }}
            >
                <View>{this.props.children}</View>
            </TouchableOpacity>
        );
    }
}

export { ButtonWrapper };
