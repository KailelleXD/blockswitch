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
                return top
                    ? [highlight.red, border.top]
                    : [color.red, border.top];
            case "purple":
                return right
                    ? [highlight.purple, border.right]
                    : [color.purple, border.right];
            case "green":
                return bottom
                    ? [highlight.green, border.bottom]
                    : [color.green, border.bottom];
            case "blue":
                return left
                    ? [highlight.blue, border.left]
                    : [color.blue, border.left];
            case "yellow":
                return center
                    ? [highlight.yellow, border.all]
                    : [color.yellow, border.all];
        }
    }

    centerBlockBorderHighlight() {
        const { top, right, bottom, left } = this.props.blockState;
        if (this.props.color === "yellow") {
            if (top) {
                return centerBorderHighlight.top;
            }
            if (right) {
                return centerBorderHighlight.right;
            }
            if (bottom) {
                return centerBorderHighlight.bottom;
            }
            if (left) {
                return centerBorderHighlight.left;
            }
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
                        this.colorType(),
                        this.centerBlockBorderHighlight(),
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
        backgroundColor: "#ff0000",
        borderColor: "#fff",
        borderWidth: ".25rem"
    },
    blue: {
        //dark-blue
        backgroundColor: "#0000ff",
        borderColor: "#fff"
    },
    yellow: {
        //golden-rod
        backgroundColor: "#ffff00",
        borderColor: "#fff"
    },
    purple: {
        //neon-purple
        backgroundColor: "#bc13fe",
        borderColor: "#fff"
    },
    green: {
        //dark-green
        backgroundColor: "#00ff00",
        borderColor: "#fff"
    }
});

const centerBorderHighlight = EStyleSheet.create({
    top: {
        borderTopColor: "#fff"
    },
    right: {
        borderRightColor: "#fff"
    },
    bottom: {
        borderBottomColor: "#fff"
    },
    left: {
        borderLeftColor: "#fff"
    }
});

const border = EStyleSheet.create({
    top: {
        borderWidth: ".25rem",
        borderBottomWidth: 0
    },
    right: {
        borderWidth: ".25rem",
        borderLeftWidth: 0
    },
    bottom: {
        borderWidth: ".25rem",
        borderTopWidth: 0
    },
    left: {
        borderWidth: ".25rem",
        borderRightWidth: 0
    },
    all: {
        borderWidth: ".25rem"
    },
    none: {
        borderWidth: 0
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
