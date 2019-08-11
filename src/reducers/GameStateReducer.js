import {
    RESET_GAME,
    ADD_TO_FORWARD_PATTERN_ARRAY,
    CLEAR_PATTERNS,
    SET_DISPLAY_PATTERN,
    SET_PATTERN_DIRECTION
} from "../actions/types";

const INITIAL_STATE = {
    forwardPatternArray: [],
    reversePatternArray: [],
    patternDirection: true,
    displayPatternActive: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RESET_GAME:
            // console.log(`RESET_GAME reducer called!`);
            return {
                ...state,
                patternDirection: true,
                displayPatternActive: false
            };
        case CLEAR_PATTERNS:
            // console.log(`CLEAR_PATTERNS reducer called!`);
            return {
                ...state,
                forwardPatternArray: [],
                reversePatternArray: []
            };
        case ADD_TO_FORWARD_PATTERN_ARRAY:
            // console.log(`ADD_TO_FORWARD_PATTERN_ARRAY reducer called!`);
            const updatedForwardPatternArray = state.patternDirection
                ? [...state.forwardPatternArray, action.payload]
                : [action.payload, ...state.forwardPatternArray];

            let reversePatternArray = [...updatedForwardPatternArray];
            let updatedReversePatternArray = reversePatternArray
                .reverse()
                .map((block, i) => {
                    return block;
                });

            return {
                ...state,
                forwardPatternArray: updatedForwardPatternArray,
                reversePatternArray: updatedReversePatternArray
            };

        case SET_DISPLAY_PATTERN:
            // console.log(`SET_DISPLAY_PATTERN reducer called!`);
            return {
                ...state,
                displayPatternActive: action.payload
            };
        case SET_PATTERN_DIRECTION:
            // console.log(`SET_PATTERN_DIRECTION reducer called!`);
            return {
                ...state,
                patternDirection: action.payload
            };
        default:
            return state;
    }
};
