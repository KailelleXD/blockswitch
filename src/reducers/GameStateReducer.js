import { ADD_TO_FORWARD_PATTERN_ARRAY, CLEAR_PATTERNS } from "../actions/types";

const INITIAL_STATE = {
    forwardPatternArray: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLEAR_PATTERNS:
            // console.log(`CLEAR_PATTERNS reducer called!`);
            return {
                ...state,
                forwardPatternArray: []
            };
        case ADD_TO_FORWARD_PATTERN_ARRAY:
            // console.log(`ADD_TO_FORWARD_PATTERN_ARRAY reducer called!`);
            const updatedForwardPatternArray = [
                ...state.forwardPatternArray,
                action.payload
            ];
            // console.log(`forwardPatternArray:${updatedForwardPatternArray}`);
            return {
                ...state,
                forwardPatternArray: updatedForwardPatternArray
            };
        default:
            return state;
    }
};
