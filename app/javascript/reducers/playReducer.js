import {NEXT_SLIDE, PREV_SLIDE, PAUSE, RESUME} from "./actions";

import {initialNav} from "../packs/application";

export default function playReducer(state=initialNav, action) {
    switch (action.type) {
        case PAUSE:
            return {...state, isPlaying: false};
        case RESUME:
            return {...state, isPlaying: true};
        case NEXT_SLIDE:
            return {...state, activeSlideIdx: action.idx + 1};
        case PREV_SLIDE:
            return {...state, activeSlideIdx: action.idx - 1};
        default:
            return state
    }
}

