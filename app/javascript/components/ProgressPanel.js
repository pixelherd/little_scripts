import React from 'react';
import './page.scss';

export const ProgressPanel = ({leftClock, progressBar, rightClock}) => {
    return (
        <div className="progress-panel">
            {leftClock}
            {progressBar}
            {rightClock}
            </div>
    )};