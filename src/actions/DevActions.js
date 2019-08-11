import { ADD_TO_INPUT_LOGGER, CLEAR_USER_LOGS } from "./types";

// ADD_TO_INPUT_LOGGER ////
export const addToInputLogger = value => {
    // console.log(`ADD_TO_INPUT_LOGGER action called!`);
    return {
        type: ADD_TO_INPUT_LOGGER,
        payload: value
    };
};

// CLEAR_HISTORY ////
export const clearUserLogs = () => {
    // console.log(`CLEAR_HISTORY action called!`);
    return {
        type: CLEAR_USER_LOGS
    };
};
