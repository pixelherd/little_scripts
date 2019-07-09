import React, {useState, useEffect} from 'react';
import "./countdown_timer.scss"
const CountdownTimer = ({time}) =>  {



    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return (<div className="CountdownTimer">
        <div>
            <p>{minutes}:{seconds}</p>

        </div>
    </div>)
};

export default CountdownTimer