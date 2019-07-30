import {PAUSE, RESUME, NEXT_SLIDE} from "./actions";
import {initialTimings} from "../packs/application";

export default function timingsReducer(state=initialTimings, action) {
    switch (action.type) {
        case PAUSE:
            return {...state,
                    past: action.timestamp - state.startTime,
                    future: (state.finishTime - action.timestamp)};
        case RESUME:
            let newFinishTime = action.timestamp + state.future;
            return {...state,
                    past:       action.timestamp - state.startTime,
                    finishTime: action.timestamp + state.future};
        case NEXT_SLIDE:
            return state;
        default:
            return state
    }
}
