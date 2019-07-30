import playReducer from "./playReducer";
import {RESTART} from "./actions";
import timingsReducer from "./timingsReducer";
import {initialTimings} from "../packs/application"
import {initialNav} from "../packs/application";
import {init} from "../packs/application";

export const rootReducer = ((state=init, action) => {
    Object.freeze(state);

    // global counter effectively serves as a unique ID
    // for the slideshow, so that all timers reset at playthrough restart

    let historyCounter = state.globalCounter;

    if (action.type === RESTART) {
        const newStartTime = action.timestamp;
        const newFinishTime = newStartTime + state.timings.total_seconds * 1000;
        return {
            globalCounter: historyCounter + 1,
            data: state.data,
            nav: playReducer(initialNav, action),
            timings: timingsReducer({...initialTimings,
                                    startTime: newStartTime,
                                    finishTime: newFinishTime,
                                    prevProgressTimestamp: newStartTime
            }, action),
        }
    }
    return {
        globalCounter: historyCounter,
        data: state.data,
        nav: playReducer(state.nav, action),
        timings: timingsReducer(state.timings, action)}
});
