import React, {useState} from 'react';
import "./countdown_timer.scss"
const CountdownTimer = ({time}) =>  {

    const [timeRemaining, setTimeRemaining] = React.useState(time);

    function tick() {
        setTimeRemaining(timeRemaining => timeRemaining - 1)
    }

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return (<div className="CountdownTimer">
        <div>
            <p><button className="fakeTick" onClick={tick}> decrease seconds </button> </p>
            {/*<p> {timeRemaining}</p>*/}
            <p>{minutes}:{seconds}</p>

        </div>
    </div>)
};

export default CountdownTimer