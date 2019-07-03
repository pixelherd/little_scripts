import React {useState, use}from 'react';

const CountdownTimer = props =>  {
    let timeRemaining = props.timeRemaining;
    return (<div className="CountdownTimer"
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