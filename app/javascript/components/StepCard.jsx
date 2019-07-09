import React from "react";
import StepName from './StepName';
import CountdownTimer from "./CountdownTimer";
import "./card.scss";


export const Slides = (props) => {

    return <div className="Slides" {...props} />
};

export const StepCard = (props) => {

    let hidden = props.isActive ? '' : 'hidden';
    const fullName = [props.className, hidden].join(" ");

    // NB: timer gets handed 'isActive' prop so that it remembers where it was,
    // in case we slide away from a step partway through.
    // To get a new timer instance every time instead, pass isActive as a "key" prop.

    return (
            <section className={fullName}>
                <StepName step={props.step}/>
                <CountdownTimer
                    time={props.time}
                    isActive={props.isActive}
                />
            </section>
    )
};
