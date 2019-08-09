import React, { Component } from "react";
import { Permissions } from "expo";
import { captureScreen } from "react-native-view-shot";
import {
    CameraRoll,
    StyleSheet,
    View,
    TouchableWithoutFeedback
} from "react-native";
import { withNavigation } from "react-navigation";

class DoubleTapScreenShot extends Component {
    // HELPER FUNCTIONS ////

    async useCameraRollAsync() {
        // permissions returns only for CAMERA_ROLL
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status === "granted") {
            this.takeScreenShot();
        } else {
            throw new Error("Camera Roll permission not granted");
        }
    }

    //----------------------------------------------------------------------------
    // Function to use react-native-view-shot library to take a screenshot.
    takeScreenShot = () => {
        captureScreen({
            format: "jpg",
            quality: 0.8
        }).then(
            uri => CameraRoll.saveToCameraRoll(uri),
            error => console.error("Oops, snapshot failed", error)
        );
        this.props.navigation.navigate("WhiteScreen");
        setTimeout(() => {
            this.props.navigation.navigate("DevScreen");
        }, 0);
    };
    //----------------------------------------------------------------------------

    //----------------------------------------------------------------------------
    // Function to determine if a user has double-tapped on the screen.
    lastTap = null;
    handleDoubleTap = () => {
        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (this.lastTap && now - this.lastTap < DOUBLE_PRESS_DELAY) {
            this.useCameraRollAsync();
        } else {
            this.lastTap = now;
        }
    };
    //----------------------------------------------------------------------------

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.handleDoubleTap}>
                    {this.props.children}
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default withNavigation(DoubleTapScreenShot);
