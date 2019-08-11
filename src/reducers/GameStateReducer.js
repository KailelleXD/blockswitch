import {
    RESET_GAME,
    ADD_TO_PATTERN_ARRAY,
    CLEAR_PATTERNS,
    SET_DISPLAY_PATTERN_ACTIVE,
    SET_PATTERN_DIRECTION,
    SET_USER_INPUT_ACTIVE
} from "../actions/types";

const INITIAL_STATE = {
    displayConsoleLogs: false, //toggle to display console logs.
    forwardPatternArray: [],
    reversePatternArray: [],
    patternDirection: true,
    displayPatternActive: false,
    userInputActive: false
};

consoleLogProcess = action => {
    const displayConsoleLogs = INITIAL_STATE[Object.keys(INITIAL_STATE)[0]];
    if (displayConsoleLogs) {
        console.log(
            `${action.type}: (${
                action.payload || !action.payload ? action.payload : ""
            })`
        );
    }
}; //consoleLogProcess(action);

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RESET_GAME:
            this.consoleLogProcess(action);
            return {
                ...state,
                patternDirection: true,
                displayPatternActive: false
            };
        case CLEAR_PATTERNS:
            this.consoleLogProcess(action);
            return {
                ...state,
                forwardPatternArray: [],
                reversePatternArray: []
            };
        case ADD_TO_PATTERN_ARRAY:
            this.consoleLogProcess(action);
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

        case SET_DISPLAY_PATTERN_ACTIVE:
            this.consoleLogProcess(action);
            return {
                ...state,
                displayPatternActive: action.payload
            };
        case SET_PATTERN_DIRECTION:
            this.consoleLogProcess(action);
            return {
                ...state,
                patternDirection: action.payload
            };
        case SET_USER_INPUT_ACTIVE:
            this.consoleLogProcess(action);
            return {
                ...state,
                userInputActive: action.payload
            };
        default:
            return state;
    }
};
