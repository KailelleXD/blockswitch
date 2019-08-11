import React, { Component } from "react";
import { View, Text } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import EStyleSheet from "react-native-extended-stylesheet";

/* 
Available props to use with this component: 
    text, 
    backgroundColor,
    color, 
    height, 
    width, 
    alignSelf,
    textAlign, 
    textAlignVertical, 
    borderWidth, 
    borderRadius, 
    borderColor,
    margin,
    marginHorizontal,
    marginVertical,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight
*/

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text
                    style={[
                        styles.buttonStyle,
                        {
                            backgroundColor:
                                this.props.backgroundColor || "#000",
                            color: this.props.color || "#fff",
                            height: hp(this.props.height || "7.5%"),
                            width: wp(this.props.width || "100%"),
                            alignSelf: this.props.alignSelf || "center",
                            textAlign: this.props.textAlign || "center",
                            textAlignVertical:
                                this.props.textAlignVertical ||
                                this.props.textAlign ||
                                "center",
                            borderWidth: wp(this.props.borderWidth || ".5%"),
                            borderRadius: wp(this.props.borderRadius || "2%"),
                            borderColor: this.props.borderColor || "#fff",
                            margin: hp(this.props.margin),
                            marginHorizontal: wp(this.props.marginHorizontal),
                            marginVertical: hp(this.props.marginVertical),
                            marginTop: hp(this.props.marginTop),
                            marginBottom: hp(this.props.marginBottom),
                            marginLeft: wp(this.props.marginLeft),
                            marginRight: wp(this.props.marginRight)
                        }
                    ]}
                >
                    {this.props.text || '[ Use "text" props to set text ]'}
                </Text>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    buttonStyle: {
        fontSize: "1rem"
    }
});

export { Button };
