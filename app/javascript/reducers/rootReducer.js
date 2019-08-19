import playReducer from "./playReducer";
import {RESTART} from "./actions";
import timingsReducer from "./timingsReducer";
// import {initialTimings} from "../packs/application"
// import {initialNav} from "../packs/application";



export const rootReducer = ((state={}, action) => {
    Object.freeze(state);

    // global counter effectively serves as a unique ID
    // for the slideshow, so that all timers reset at playthrough restart

    let historyCounter = state.globalCounter;

    if (action.type === RESTART) {
        const initialState = action.initialState;
        const newStartTime = action.timestamp;
        const newFinishTime = newStartTime + state.timings.total_seconds * 1000;
        return {
            globalCounter: historyCounter + 1, action,
            data: state.data,
            nav: playReducer(initialState.nav, action),
            timings: timingsReducer({...initialState.timings,
                                    startTime: newStartTime,
                                    finishTime: newFinishTime,
                                    prevProgressTimestamp: newStartTime
            }, action),
        }
    }
    return {
        globalCounter: historyCounter, action,
        data: state.data,
        nav: playReducer(state.nav, action),
        timings: timingsReducer(state.timings, action)}
});
