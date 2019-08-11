import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import {
    highlightTopBlock,
    highlightRightBlock,
    highlightBottomBlock,
    highlightLeftBlock,
    highlightCenterBlock
} from "../../actions";
import { Button, ButtonWrapper } from "../../components/common";

/*  ---------------------------------------------------------------------------------------  //
    To use this component, Copy to: 
        GameLogicContainer.js

    import ToggleHighlightBlocks from "../utils/testComponents/ToggleHighlightBlocks";

    <ToggleHighlightBlocks/>
//  --------------------------------------------------------------------------------------  */

class ToggleHighlightBlocks extends Component {
    render() {
        return (
            <View>
                <ButtonWrapper
                    function={() => {
                        this.props.highlightTopBlock(
                            this.props.blockState.top ? false : true
                        );
                        this.props.highlightRightBlock(
                            this.props.blockState.top ? false : true
                        );
                        this.props.highlightBottomBlock(
                            this.props.blockState.top ? false : true
                        );
                        this.props.highlightLeftBlock(
                            this.props.blockState.top ? false : true
                        );
                        this.props.highlightCenterBlock(
                            this.props.blockState.top ? false : true
                        );
                    }}
                >
                    <Button
                        text={"Button Highlight Toggle"}
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
        highlightTopBlock,
        highlightRightBlock,
        highlightBottomBlock,
        highlightLeftBlock,
        highlightCenterBlock
    } = state;

    return {
        blockState: state.display.blockState,
        highlightTopBlock,
        highlightRightBlock,
        highlightBottomBlock,
        highlightLeftBlock,
        highlightCenterBlock
    };
};

export default connect(
    mapStateToProps,
    {
        highlightTopBlock,
        highlightRightBlock,
        highlightBottomBlock,
        highlightLeftBlock,
        highlightCenterBlock
    }
)(ToggleHighlightBlocks);
