import React, { Component } from "react";
import { View } from "react-native";
import { Button, ButtonWrapper } from "../../components/common";

/*  ---------------------------------------------------------------------------------------  //
    To use this component, Copy to: 
        GameLogicContainer.js
    
    import HighlightTestButton from "../utils/testComponents/HighlightTestButton";

    <HighlightTestButton
        renderPatternToCross={this.renderPatternToCross}
    />
//  --------------------------------------------------------------------------------------  */

export default class HighlightTestButton extends Component {
    render() {
        return (
            <View>
                <ButtonWrapper
                    function={() => {
                        const highlightTestArray = ["T", "R", "B", "L", "C"];
                        this.props.renderPatternToCross(highlightTestArray);
                    }}
                >
                    <Button
                        text={"Button Highlight Test"}
                        color={"#FFF8DC"}
                        backgroundColor={"#008080"}
                        width={"90%"}
                        borderColor={"#FFF8DC"}
                        marginTop={".1%"}
                    />
                </ButtonWrapper>
            </View>
        );
    }
}
