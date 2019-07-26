export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREV_SLIDE = 'PREV_SLIDE';
export const SET_FINISH_TIME = 'SET_FINISH_TIME';
export const SET_PROGRESS = 'SET_PROGRESS';
export const UPDATE_CURRENT_TIMER = 'UPDATE_CURRENT_TIMER';

export const nextSlide = (idx) => {
    return { type: NEXT_SLIDE, idx }
};

export const prevSlide = (idx) => {
    return {type: PREV_SLIDE, idx}
};

export const setFinishTime = (time) => {
    return { type: SET_FINISH_TIME, time }
};

export const setProgress = (number) => {
    return { type: SET_PROGRESS, number }
};

export const updateTimer = (time) => {
    return { type: UPDATE_CURRENT_TIMER, time }
};
