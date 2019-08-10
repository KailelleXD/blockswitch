import {
    HIGHLIGHT_TOP_BLOCK,
    HIGHLIGHT_RIGHT_BLOCK,
    HIGHLIGHT_BOTTOM_BLOCK,
    HIGHLIGHT_LEFT_BLOCK,
    HIGHLIGHT_CENTER_BLOCK
} from "../actions/types";

const INITIAL_STATE = {
    userInputHistory: [],
    blockState: {
        top: false,
        right: false,
        bottom: false,
        left: false,
        center: false
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HIGHLIGHT_TOP_BLOCK:
            // console.log(`HIGHLIGHT_TOP_BLOCK reducer called!`);
            return {
                ...state,
                blockState: { ...state.blockState, top: action.payload }
            };
        case HIGHLIGHT_RIGHT_BLOCK:
            // console.log(`HIGHLIGHT_RIGHT_BLOCK reducer called!`);
            return {
                ...state,
                blockState: { ...state.blockState, right: action.payload }
            };
        case HIGHLIGHT_BOTTOM_BLOCK:
            // console.log(`HIGHLIGHT_BOTTOM_BLOCK reducer called!`);
            return {
                ...state,
                blockState: { ...state.blockState, bottom: action.payload }
            };
        case HIGHLIGHT_LEFT_BLOCK:
            // console.log(`HIGHLIGHT_LEFT_BLOCK reducer called!`);
            return {
                ...state,
                blockState: { ...state.blockState, left: action.payload }
            };
        case HIGHLIGHT_CENTER_BLOCK:
            // console.log(`HIGHLIGHT_CENTER_BLOCK reducer called!`);
            return {
                ...state,
                blockState: { ...state.blockState, center: action.payload }
            };
        default:
            return state;
    }
};
