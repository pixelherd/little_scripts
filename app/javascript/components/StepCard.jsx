import React, {useState} from "react";
import StepName from './StepName';
import CountdownTimer from "./CountdownTimer";
import "./card.scss";


export const Slides = (props) => {

    return <div className="Slides" {...props} />
};

export const StepCard = (props) => {

    let hidden = props.isActive ? '' : 'hidden';
    const fullName = [props.className, hidden].join(" ");

    return (
            <section className={fullName}>
                <StepName step={props.step}/>
                <CountdownTimer time={props.time}/>
            </section>
    )
};
