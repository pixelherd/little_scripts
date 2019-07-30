export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREV_SLIDE = 'PREV_SLIDE';
export const CALC_FINISH_TIME = 'CALC_FINISH_TIME';
export const SET_PROGRESS = 'SET_PROGRESS';
export const UPDATE_CURRENT_TIMER = 'UPDATE_CURRENT_TIMER';
export const PAUSE = 'PAUSE';
export const RESUME = 'RESUME';
export const RESTART = 'RESTART';
export const START_DELAY = 'START DELAY';

export const nextSlide = (idx, timestamp) => {
    return { type: NEXT_SLIDE, idx: idx, timestamp: timestamp }
};

export const prevSlide = (idx, timestamp) => {
    return { type: PREV_SLIDE, idx: idx, timestamp: timestamp}
};

export const pausePlaythrough = (timestamp) => {
    return {type: PAUSE, timestamp: timestamp}
};

export const resumePlaythrough = (timestamp) => {
    return {type: RESUME, timestamp: timestamp}
};

export const restartPlaythrough = (timestamp) => {
    return {type: RESTART, timestamp: timestamp}
};

export const startDelay = (timestamp) => {
    return {type: START_DELAY, timestamp: timestamp}
};

export const calcFinishTime = (now) => {
    return { type: CALC_FINISH_TIME, now }
};

export const setProgress = (number) => {
    return { type: SET_PROGRESS, number }
};

export const updateTimer = (time) => {
    return { type: UPDATE_CURRENT_TIMER, time }
};
