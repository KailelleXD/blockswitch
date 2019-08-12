import { ADD_TO_INPUT_LOGGER, CLEAR_USER_LOGS } from "../actions/types";

const INITIAL_STATE = {
    displayConsoleLogs: false, //toggle to display console logs.
    userInputLog: []
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
        case ADD_TO_INPUT_LOGGER:
            consoleLogProcess(action);
            const updatedUserLogs = [...state.userInputLog, action.payload];
            return { ...state, userInputLog: updatedUserLogs };
        case CLEAR_USER_LOGS:
            consoleLogProcess(action);
            return { ...state, userInputLog: [] };
        default:
            return state;
    }
};
