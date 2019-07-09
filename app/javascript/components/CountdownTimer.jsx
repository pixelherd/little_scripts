import React from 'react';
import "./countdown_timer.scss"
const CountdownTimer = props =>  {


    return (<div className="CountdownTimer">
        <p>
            {Math.floor(props.duration/60)}:{Math.floor(props.duration%60)}
        </p>
    </div>)
}

export default CountdownTimer