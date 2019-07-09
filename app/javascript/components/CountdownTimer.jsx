import React, {useEffect, useState} from 'react';
import "./countdown_timer.scss"
const CountdownTimer = ({time, isActive}) =>  {

    const [timeRemaining, setTimeRemaining] = useState(time);

    // TODO implement isLate and a count-up timer after the first one runs out

    useEffect(
        () => {
            if (timeRemaining > 0 && isActive) {
                let timer = setTimeout(
                    () => {
                        setTimeRemaining(timeRemaining => timeRemaining - 1)
                    }, 1000);
                return () => clearTimeout(timer)
            }
        },
        // if either of these values changes, clear the timer; otherwise
        // either the timers on all slides will update at once, or they don't update
        // after the first render:
        [timeRemaining, isActive]
    );

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = Math.floor(timeRemaining % 60);

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