import React from "react";
import StepName from './StepName';
import CountdownTimer from "./CountdownTimer";
import "./card.scss";


export const Slides = (props) => {
   return( <article>
       {props.children}
    </article>)
};

export const StepCard = ({stepID, name, isActive, className, time}) => {

    let hidden = isActive ? '' : 'hidden';
    let fullName = [className, hidden].join(" ");

    // NB: timer gets handed 'isActive' prop so that it remembers where it was,
    // in case we slide away from a step partway through.
    // To get a new timer instance every time instead, pass isActive as a "key" prop.

    return (
            <section className={fullName}>
                <StepName name={name}/>
                <CountdownTimer
                    stepId={stepID}
                    time={time}
                    isActive={isActive}
                />
            </section>
    )
};
