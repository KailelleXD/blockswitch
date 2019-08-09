import { ADD_TO_INPUT_LOGGER, CLEAR_HISTORY } from "../actions/types";

const INITIAL_STATE = {
    userInputHistory: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_INPUT_LOGGER:
            // console.log(`ADD_TO_INPUT_LOGGER reducer called!`);
            const updatedUserInputHistory = [
                ...state.userInputHistory,
                action.payload
            ];
            return { ...state, userInputHistory: updatedUserInputHistory };
        case CLEAR_HISTORY:
            // console.log(`CLEAR_HISTORY reducer called!`);
            return { ...state, userInputHistory: [] };
        default:
            return state;
    }
};
