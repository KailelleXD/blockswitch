import {
    HIGHLIGHT_TOP_BLOCK,
    HIGHLIGHT_RIGHT_BLOCK,
    HIGHLIGHT_BOTTOM_BLOCK,
    HIGHLIGHT_LEFT_BLOCK,
    HIGHLIGHT_CENTER_BLOCK
} from "./types";

// HIGHLIGHT_TOP_BLOCK ////
export const highlightTopBlock = bool => {
    // console.log(`HIGHLIGHT_TOP_BLOCK action called!`);
    return {
        type: HIGHLIGHT_TOP_BLOCK,
        payload: bool
    };
};

// HIGHLIGHT_RIGHT_BLOCK ////
export const highlightRightBlock = bool => {
    // console.log(`HIGHLIGHT_RIGHT_BLOCK action called!`);
    return {
        type: HIGHLIGHT_RIGHT_BLOCK,
        payload: bool
    };
};

// HIGHLIGHT_BOTTOM_BLOCK ////
export const highlightBottomBlock = bool => {
    // console.log(`HIGHLIGHT_BOTTOM_BLOCK action called!`);
    return {
        type: HIGHLIGHT_BOTTOM_BLOCK,
        payload: bool
    };
};

// HIGHLIGHT_LEFT_BLOCK ////
export const highlightLeftBlock = bool => {
    // console.log(`HIGHLIGHT_LEFT_BLOCK action called!`);
    return {
        type: HIGHLIGHT_LEFT_BLOCK,
        payload: bool
    };
};

// HIGHLIGHT_CENTER_BLOCK ////
export const highlightCenterBlock = bool => {
    // console.log(`HIGHLIGHT_CENTER_BLOCK action called!`);
    return {
        type: HIGHLIGHT_CENTER_BLOCK,
        payload: bool
    };
};
