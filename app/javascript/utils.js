import sumBy from 'lodash.sumby';

export const getEndTime = (startTime, stepsArray) => {

    return startTime + sumBy(stepsArray, (step) => {

        if (!step.duration) { return 0 }
        return step.duration
    });
};