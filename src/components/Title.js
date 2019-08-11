import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import EStyleSheet from "react-native-extended-stylesheet";
import { setPatternDirection } from "../actions";

class Title extends Component {
    // STYLE FUNCTIONS ////
    patternDirection = () => {
        let patternDirection = this.props.patternDirection
            ? "forward"
            : "reverse";
        switch (patternDirection) {
            case "forward":
                return styles.forwardStyle;
            case "reverse":
                return styles.reverseStyle;
        }
    };

    render() {
        return (
            <View style={[styles.titleStyle, this.patternDirection()]}>
                <Text style={[styles.block, styles.textStyle]}> block </Text>
                <Text style={[styles.switch, styles.textStyle]}> switch </Text>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    block: {
        textAlign: "left",
        textAlignVertical: "top",
        lineHeight: hp("8%")
    },
    switch: {
        textAlign: "right",
        textAlignVertical: "bottom",
        lineHeight: hp("7.25%")
    },
    textStyle: {
        fontFamily: "sans-serif-light",
        fontSize: "3rem",
        letterSpacing: wp(".8%"),
        padding: 0
    },
    titleStyle: {
        margin: 0,
        marginTop: hp("3.5%"),
        width: wp("90%"),
        height: hp("16.25%"),
        borderWidth: ".25rem",
        borderTopLeftRadius: "1rem",
        borderBottomRightRadius: "1rem"
    },
    forwardStyle: {
        //forest-green
        backgroundColor: "#228B22"
    },
    reverseStyle: {
        //fire-brick
        backgroundColor: "#B22222"
    }
});

const mapStateToProps = state => {
    const { setPatternDirection } = state;

    return {
        patternDirection: state.gameState.patternDirection,
        setPatternDirection
    };
};

export default connect(
    mapStateToProps,
    { setPatternDirection }
)(Title);
