import { ADD_TO_FORWARD_PATTERN_ARRAY, CLEAR_PATTERNS } from "./types";

// CLEAR_PATTERNS ////
export const clearPatterns = () => {
    // console.log(`CLEAR_PATTERNS action called!`);
    return {
        type: CLEAR_PATTERNS
    };
};

// ADD_TO_FORWARD_PATTERN_ARRAY ////
export const addToForwardPatternArray = value => {
    // console.log(`ADD_TO_FORWARD_PATTERN_ARRAY action called!`);
    return {
        type: ADD_TO_FORWARD_PATTERN_ARRAY,
        payload: value
    };
};
