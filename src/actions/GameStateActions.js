import {
    RESET_GAME,
    ADD_TO_PATTERN_ARRAY,
    CLEAR_PATTERNS,
    SET_DISPLAY_PATTERN,
    SET_PATTERN_DIRECTION
} from "./types";

// RESET_GAME ////
export const resetGame = () => {
    // console.log(`RESET_GAME action called!`);
    return {
        type: RESET_GAME
    };
};

// CLEAR_PATTERNS ////
export const clearPatterns = () => {
    // console.log(`CLEAR_PATTERNS action called!`);
    return {
        type: CLEAR_PATTERNS
    };
};

// ADD_TO_FORWARD_PATTERN_ARRAY ////
export const addToPatternArray = value => {
    // console.log(`ADD_TO_PATTERN_ARRAY action called! (${value})`);
    return {
        type: ADD_TO_PATTERN_ARRAY,
        payload: value
    };
};

// SET_DISPLAY_PATTERN ////
export const setDisplayPattern = bool => {
    // console.log(`SET_DISPLAY_PATTERN action called! (${bool})`);
    return {
        type: SET_DISPLAY_PATTERN,
        payload: bool
    };
};

// SET_PATTERN_DIRECTION ////
export const setPatternDirection = bool => {
    // console.log(`SET_PATTERN_DIRECTION action called! (${bool})`);
    return {
        type: SET_PATTERN_DIRECTION,
        payload: bool
    };
};
