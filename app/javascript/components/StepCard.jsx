import React, {useState} from "react";
import StepName from './StepName';
import CountdownTimer from "./CountdownTimer";
import "./card.scss";

const StepCard = (props) => {

    return (
            <section className="step-card">
                <StepName step={props.step}/>
                <CountdownTimer time={props.time}/>
            </section>
    )
};
export default StepCard;
