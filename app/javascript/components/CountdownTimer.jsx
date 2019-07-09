import React from 'react';
import "./countdown_timer.scss"
const CountdownTimer = ({time}) =>  {

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return (<div className="CountdownTimer">
        <div>
            <p>{formatTime(minutes)}:{formatTime(seconds)}</p>

        </div>
    </div>)
};

export default CountdownTimer

function formatTime(unit){
    const leadingZero = unit < 10 ? '0' : '';

    return leadingZero + unit.toString()
}