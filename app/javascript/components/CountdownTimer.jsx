import React, { useState, useEffect } from 'react';

function CountdownTimer(props) {

    const [timeRemaining, setTimeRemaining] = useState(props.step.duration);
    const [isLate, setIsLate] = useState(false);

    useEffect(()=> {
        if (!isLate) {
            setTimeout(() => {
                setTimeRemaining(
                    timeRemaining > 0 ? (timeRemaining - 1) : 0
                )
            }, 1000)
        }
    });

    return (<div className="CountdownTimer" {...props}
                 style={
                     {background: "transparent",
                         // border: "1px solid black",
                         minHeight: '250px',
                         width: '250px',
                         display: 'flex',
                         justifyContent: 'center',
                         alignItems: 'center'
                     }
                 }>
        <p style={{fontWeight: 700,
            fontSize: '60pt',
            fontFamily: 'Arial'
        }}>
            {Math.floor(timeRemaining/60)}:{Math.floor(timeRemaining%60)}
        </p>
    </div>)
}

export default CountdownTimer