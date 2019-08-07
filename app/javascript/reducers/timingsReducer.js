import {PAUSE, RESUME, NEXT_SLIDE, PREV_SLIDE} from "./actions";
import sum from "lodash.sum"

export default function timingsReducer(state={}, action) {

    let newState = {...state};

    let deltaT = (action.timestamp - state.prevProgressTimestamp);
    let sync_timer = state.current_timer - deltaT;
    newState.past = state.past + deltaT;
    newState.prevProgressTimestamp = action.timestamp;

    switch (action.type) {
        case PAUSE:
            newState.future = (state.finishTime - action.timestamp);
            return newState;

        case RESUME:
            newState.finishTime = action.timestamp + state.future;
            return newState;
        //TODO anything that isn't this.
        case NEXT_SLIDE:
            newState.past_timers = state.past_timers.concat(sync_timer);
            newState.current_timer = state.future_timers[0];
            newState.future_timers = state.future_timers.slice(1);
            newState.future = sum(state.future_timers);
            newState.finishTime = action.timestamp + newState.future;

            newState.progress = Math.round(sum(state.all_timers.slice(0, newState.past_timers.length)) / sum(state.all_timers) * 100);
            return newState;

        case PREV_SLIDE:
            newState.future_timers = state.future_timers.concat(sync_timer);
            newState.current_timer = state.past_timers.slice(-1)[0];
            newState.future = state.future + newState.current_timer + deltaT;
            newState.past_timers = state.past_timers.slice(0, -1);
            newState.finishTime = action.timestamp + newState.future;
                newState.progress = Math.round(sum(state.all_timers.slice(0, newState.past_timers.length)) / sum(state.all_timers) * 100);
            return newState;
//TODO case DONE
        default:
            return state
    }
}
