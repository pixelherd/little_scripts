import React, {useState} from 'react';
import "./countdown_timer.scss"
const CountdownTimer = props =>  {

    const minutes = Math.floor(props.time / 60);
    const seconds = Math.floor(props.time % 60);

    return (<div className="CountdownTimer">
        <p>
            {minutes}:{seconds}

        </p>
    </div>)
};

export default CountdownTimer