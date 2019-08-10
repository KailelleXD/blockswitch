import { combineReducers } from "redux";
import DevReducer from "./DevReducer";
import DisplayReducer from "./DisplayReducer";

export default combineReducers({
    dev: DevReducer,
    display: DisplayReducer
});
