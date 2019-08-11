import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import {
    setUserInputActive
} from "../../actions";
import { Button, ButtonWrapper } from "../../components/common";

/*  ---------------------------------------------------------------------------------------  //
    To use this component, Copy to: 
        GameLogicContainer.js

    import ToggleUserInput from "../utils/testComponents/ToggleUserInput";

    <ToggleUserInput/>
//  --------------------------------------------------------------------------------------  */

class ToggleUserInput extends Component {
    render() {
        return (
            <View>
                <ButtonWrapper
                    function={() => {this.props.setUserInputActive(this.props.userInputActive?false:true)
                    }}
                >
                    <Button
                        text={`this.props.userInputActive // [ ${this.props.userInputActive} ]`}
                        color={"#FFF8DC"}
                        backgroundColor={"#800080"}
                        width={"90%"}
                        borderColor={"#FFF8DC"}
                        marginTop={".1%"}
                    />
                </ButtonWrapper>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const {
        setUserInputActive
    } = state;

    return {
        userInputActive: state.gameState.userInputActive,
        setUserInputActive
    };
};

export default connect(
    mapStateToProps,
    {
        setUserInputActive
    }
)(ToggleUserInput);
