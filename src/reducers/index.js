import { combineReducers } from "redux";
import DevReducer from "./DevReducer";
import DisplayReducer from "./DisplayReducer";
import GameStateReducer from "./GameStateReducer";

export default combineReducers({
    dev: DevReducer,
    display: DisplayReducer,
    gameState: GameStateReducer
});
