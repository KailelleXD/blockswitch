import { ADD_TO_INPUT_LOGGER, CLEAR_USER_LOGS } from "../actions/types";

const INITIAL_STATE = {
    userInputLog: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_INPUT_LOGGER:
            // console.log(`ADD_TO_INPUT_LOGGER reducer called!`);
            const updatedUserLogs = [...state.userInputLog, action.payload];
            return { ...state, userInputLog: updatedUserLogs };
        case CLEAR_USER_LOGS:
            // console.log(`CLEAR_HISTORY reducer called!`);
            return { ...state, userInputLog: [] };
        default:
            return state;
    }
};
