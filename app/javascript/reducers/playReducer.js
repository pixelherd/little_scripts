import {getEndTime} from '../utils'
import {NEXT_SLIDE, PREV_SLIDE, TIMER_ENDED, SET_FINISH_TIME, SET_PROGRESS} from "./actions";

const little_script = {
    id: 1,
    title: "Test Script",
    total_seconds: 180,
    steps: [{id: 1, name: "First Step", duration: 60},
        {id: 2, name: "Second Step", duration: 60},
        {id: 3, name: "Third Step", duration: 60}]
};
let startTime = Date.now();
let endTime = getEndTime(startTime, little_script.steps);
const initialState = {
    history: [],
    data: {
        title: little_script.title,
        totalSeconds: little_script.total_seconds,
        slides: little_script.steps,
    },
    startTime: startTime,
    finishTime: endTime,
    delayTimestamp: 0,
    activeSlideIdx: 0,
    currentTimer: little_script.steps[0].duration,
    progress: 1,
    isPlaying: true
};

export default function playReducer(state = initialState, action) {
    switch (action.type) {
        case "PAUSE":
            return {...state, isPlaying: false};
        case "RESUME":
            return {...state, isPlaying: true};
        case "UPDATE_CURRENT_TIMER":
            return {...state, currentTimer: action.payload};
        case SET_FINISH_TIME:
            return {...state, finishTime: action.time};
        case NEXT_SLIDE:
            return {...state, activeSlideIdx: action.idx + 1};
        case PREV_SLIDE:
            return {...state, activeSlideIdx: action.idx - 1};
        case SET_PROGRESS:
            return {...state, progress: action.number};
        default:
            return state
    }
}

