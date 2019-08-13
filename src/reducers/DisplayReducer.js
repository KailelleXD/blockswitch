import {
    HIGHLIGHT_TOP_BLOCK,
    HIGHLIGHT_RIGHT_BLOCK,
    HIGHLIGHT_BOTTOM_BLOCK,
    HIGHLIGHT_LEFT_BLOCK,
    HIGHLIGHT_CENTER_BLOCK
} from "../actions/types";

const INITIAL_STATE = {
    displayConsoleLogs: false, //toggle to display console logs.
    userInputHistory: [],
    blockState: {
        top: false,
        right: false,
        bottom: false,
        left: false,
        center: false
    }
};

consoleLogProcess = (action, value) => {
    const displayConsoleLogs = INITIAL_STATE[Object.keys(INITIAL_STATE)[0]];
    if (displayConsoleLogs) {
        console.log(
            `${action.type}: (${
                action.payload ? action.payload : value
            })`
        );
    }
}; //consoleLogProcess(action);

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HIGHLIGHT_TOP_BLOCK:
            consoleLogProcess(action);
            return {
                ...state,
                blockState: { ...state.blockState, top: action.payload }
            };
        case HIGHLIGHT_RIGHT_BLOCK:
            consoleLogProcess(action);
            return {
                ...state,
                blockState: { ...state.blockState, right: action.payload }
            };
        case HIGHLIGHT_BOTTOM_BLOCK:
            consoleLogProcess(action);
            return {
                ...state,
                blockState: { ...state.blockState, bottom: action.payload }
            };
        case HIGHLIGHT_LEFT_BLOCK:
            consoleLogProcess(action);
            return {
                ...state,
                blockState: { ...state.blockState, left: action.payload }
            };
        case HIGHLIGHT_CENTER_BLOCK:
            consoleLogProcess(action);
            return {
                ...state,
                blockState: { ...state.blockState, center: action.payload }
            };
        default:
            return state;
    }
};
