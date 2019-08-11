import React, { Component } from "react";
import { View, TouchableHighlight } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";

/*
Available props to use with this component: 
    function,
    borderRadius
*/

class ButtonWrapper extends Component {
    handlePress = () => {
        this.props.function();
    };

    render() {
        return (
            <TouchableHighlight
                onPress={this.handlePress}
                style={{
                    borderRadius: wp(this.props.borderRadius || "2%")
                }}
            >
                <View>{this.props.children}</View>
            </TouchableHighlight>
        );
    }
}

export { ButtonWrapper };
