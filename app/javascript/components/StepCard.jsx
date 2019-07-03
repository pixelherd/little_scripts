import React, {useEffect, useState} from "react";
import StepName from './StepName';
import CountdownTimer from "./CountdownTimer";
import "./card.scss";

const StepCard = (props) => {

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


    return (
            <section className="step-card">
                <StepName step={props.step}/>
                <CountdownTimer timeRemaining={timeRemaining}/>
            </section>
    )
};
export default StepCard;
