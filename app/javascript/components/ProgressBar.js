import React from 'react';
import './page.scss';

export const ProgressBar = ({isActive, maxValue, progress}) => {
    let barStatus;
    if (maxValue === progress) {
        barStatus = "complete"
    } else {
        barStatus = isActive ? "active" : "paused" }

    return (
        <progress className={`progress-${barStatus}`} max={maxValue} value={progress}>
        </progress>
    )
};