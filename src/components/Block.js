import React, { Component } from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { connect } from "react-redux";
import EStyleSheet from "react-native-extended-stylesheet";

class Block extends Component {
    constructor(props) {
        super(props);
    }

    handlePress = () => {
        this.props.onPress(this.props.value);
    };

    // STYLE FUNCTIONS ////

    colorType() {
        const { top, right, bottom, left, center } = this.props.blockState;

        switch (this.props.color) {
            case "red":
                return top ? highlight.red : color.red;
            case "purple":
                return right ? highlight.purple : color.purple;
            case "green":
                return bottom ? highlight.green : color.green;
            case "blue":
                return left ? highlight.blue : color.blue;
            case "yellow":
                return center ? highlight.yellow : color.yellow;
        }
    }

    displayBorder() {
        switch (this.props.border) {
            case "T":
                return border.top;
            case "R":
                return border.right;
            case "B":
                return border.bottom;
            case "L":
                return border.left;
            case true:
                return border.all;
            case false:
                return border.none;
            default:
                return null;
        }
    }

    borderRadiusPosition() {
        switch (this.props.borderRadius) {
            case "T":
                return radius.cornerTop;
            case "R":
                return radius.cornerRight;
            case "B":
                return radius.cornerBottom;
            case "L":
                return radius.cornerLeft;
            case "TL":
                return radius.cornerTL;
            case "TR":
                return radius.cornerTR;
            case "BL":
                return radius.cornerBL;
            case "BR":
                return radius.cornerBR;
            case "OTL":
                return radius.cornerOTL;
            case "OTR":
                return radius.cornerOTR;
            case "OBL":
                return radius.cornerOBL;
            case "OBR":
                return radius.cornerOBR;
            case "All":
                return radius.cornerAll;
            default:
                return null;
        }
    }

    // --------------- ////

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.handlePress}>
                <View
                    style={[
                        styles.blockStyle,
                        // this.props.color,
                        this.colorType(),
                        this.displayBorder(),
                        this.borderRadiusPosition()
                    ]}
                />
            </TouchableWithoutFeedback>
        );
    }
}

const styles = EStyleSheet.create({
    blockStyle: {
        margin: 0,
        width: "7rem",
        height: "7rem"
    }
});

const color = EStyleSheet.create({
    red: {
        //dark-red
        backgroundColor: "#8B0000"
    },
    blue: {
        //dark-blue
        backgroundColor: "#00008B"
    },
    yellow: {
        //golden-rod
        backgroundColor: "#DAA520"
    },
    purple: {
        //dark-purple
        backgroundColor: "#301934"
    },
    green: {
        //dark-green
        backgroundColor: "#006400"
    }
});

const highlight = EStyleSheet.create({
    red: {
        //dark-red
        backgroundColor: "#ff0000"
    },
    blue: {
        //dark-blue
        backgroundColor: "#0000ff"
    },
    yellow: {
        //golden-rod
        backgroundColor: "#ffff00"
    },
    purple: {
        //neon-purple
        backgroundColor: "#bc13fe"
    },
    green: {
        //dark-green
        backgroundColor: "#00ff00"
    }
});

const border = EStyleSheet.create({
    top: {
        borderWidth: ".25rem",
        borderColor: "#000",
        borderBottomWidth: 0
    },
    right: {
        borderWidth: ".25rem",
        borderColor: "#000",
        borderLeftWidth: 0
    },
    bottom: {
        borderWidth: ".25rem",
        borderColor: "#000",
        borderTopWidth: 0
    },
    left: {
        borderWidth: ".25rem",
        borderColor: "#000",
        borderRightWidth: 0
    },
    all: {
        borderWidth: ".25rem",
        borderColor: "#000"
    },
    none: {
        borderWidth: 0,
        borderColor: "#000"
    }
});

const radius = EStyleSheet.create({
    cornerTop: {
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem"
    },
    cornerRight: {
        borderTopRightRadius: "1rem",
        borderBottomRightRadius: "1rem"
    },
    cornerBottom: {
        borderBottomRightRadius: "1rem",
        borderBottomLeftRadius: "1rem"
    },
    cornerLeft: {
        borderBottomLeftRadius: "1rem",
        borderTopLeftRadius: "1rem"
    },
    cornerTL: {
        borderTopLeftRadius: "1rem"
    },
    cornerTR: {
        borderTopRightRadius: "1rem"
    },
    cornerBL: {
        borderBottomLeftRadius: "1rem"
    },
    cornerBR: {
        borderBottomRightRadius: "1rem"
    },
    cornerOTL: {
        borderTopRightRadius: "1rem",
        borderBottomRightRadius: "1rem",
        borderBottomLeftRadius: "1rem"
    },
    cornerOTR: {
        borderTopLeftRadius: "1rem",
        borderBottomRightRadius: "1rem",
        borderBottomLeftRadius: "1rem"
    },
    cornerOBL: {
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
        borderBottomRightRadius: "1rem"
    },
    cornerOBR: {
        borderTopLeftRadius: "1rem",
        borderTopRightRadius: "1rem",
        borderBottomLeftRadius: "1rem"
    },
    cornerAll: {
        borderRadius: "1rem"
    }
});

const mapStateToProps = state => {
    return {
        blockState: state.display.blockState
    };
};

export default connect(mapStateToProps)(Block);
