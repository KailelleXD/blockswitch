import React, { Component } from "react";
import { TextInput, View, Text } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import EStyleSheet from "react-native-extended-stylesheet";

const TextBox = ({
    label,
    value,
    onChangeText,
    placeholder,
    secureTextEntry
}) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                multiline={true}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = EStyleSheet.create({
    inputStyle: {
        backgroundColor: "#fff",
        marginBottom: hp("2.3%"),
        paddingHorizontal: wp("5%"),
        height: hp("15%"),
        width: wp("90%"),
        borderWidth: wp("1%"),
        borderRadius: wp("2.5%"),
        alignSelf: "center"
    },
    labelStyle: {
        color: "#fff",
        fontSize: ".8rem",
        marginLeft: wp("1%")
    }
});

export { TextBox };
