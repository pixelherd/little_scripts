import React, {useState, useEffect} from 'react'
import {render} from 'react-dom'

const Clock = (props) => {
    const [time, updateTime] = useState(new Date(props.date).getTime());

    useEffect(
        () => {
            let timer = setTimeout(
                () => {
                    updateTime(time => time + 60000)
                }, 60000);
            return () => clearTimeout(timer)
        },
        // if this value changes, clear the timer
        [time]
    );
    return <span> {new Date(time).toTimeString().slice(0,5)}</span>

};

document.addEventListener('DOMContentLoaded', () => {
    const data = JSON.parse(document.querySelector("#clock-node").getAttribute("data"));
    render(
        <Clock date={data.date} />,
        document.body.querySelector('#react-clock'),
    )
});
