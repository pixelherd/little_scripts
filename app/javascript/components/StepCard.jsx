import React, {useEffect, useState} from "react";
import StepName from './StepName';
import CountdownTimer from "./CountdownTimer";
import "./card.scss";


export const Slides = (props) => {

    return <div className="Slides" {...props} />
};

export const StepCard = (props) => {

    let hidden = props.isActive ? '' : 'hidden';
    const fullName = [props.className, hidden].join(" ");

    const [timeRemaining, setTimeRemaining] = useState(props.time);

    useEffect(
        () => {
            if (timeRemaining > 0 && props.isActive) {
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
        [timeRemaining, props.isActive]
    );

    return (
            <section className={fullName}>
                <StepName step={props.step}/>
                <CountdownTimer time={timeRemaining}/>
            </section>
    )
};
