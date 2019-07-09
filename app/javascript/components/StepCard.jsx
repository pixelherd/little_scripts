import React, {useState} from "react";
import StepName from './StepName';
import CountdownTimer from "./CountdownTimer";
import "./card.scss";

const StepCard = (props) => {

    const [timeRemaining, setTimeRemaining] = useState(props.step.duration);
    const [isLate, setIsLate] = useState(false);


    return (
            <section className="step-card">
                <StepName step={props.step}/>
                <CountdownTimer duration={props.step.duration}/>
            </section>
    )
};
export default StepCard;
