export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREV_SLIDE = 'PREV_SLIDE';
export const PAUSE = 'PAUSE';
export const RESUME = 'RESUME';
export const RESTART = 'RESTART';

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


