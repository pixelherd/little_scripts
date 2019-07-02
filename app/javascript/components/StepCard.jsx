import React from "react";
import StepName from './StepName';
import CountdownTimer from "./CountdownTimer";
import "./card.scss";

class StepCard extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let step = this.props.step;
        return (
            <section className="step-card">
                <StepName step={step}/>
                <CountdownTimer step={step}/>
            </section>);
    }
}
export default StepCard;
