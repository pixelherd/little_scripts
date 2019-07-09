import React, {useState} from "react";
import "./page.scss";
import {Slides, StepCard} from './StepCard';
import {Controls, ControlButton} from './ControlButton';

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slides: [],
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.setState({slides: this.props.little_script.steps});
    }

    handleClick(e) {
        e.preventDefault();
        window.history.go(-1)
    }


    render() {
        let initial_step = this.props.little_script.steps[0];
        let steps = this.props.little_script.steps;
        return (
                <div className="playThroughScreen">
                    <nav>
                        <button className="close" onClick={this.handleClick}> X </button>
                    </nav>
                    <article className="script">
                        <h1>{this.props.little_script.name}</h1>

                        <SlideShow slides={steps} />
                    </article>
                </div>

        )
    }
}

export default Page

// TODO add valid html for keyboard controls

const SlideShow = ({slides}) => {
    const [activeSlide, setActiveSlide] = React.useState(0);
    const maxSlides = slides.length;

    function handleNext() {
        setActiveSlide(prev => prev + 1);
    }

    function handleBack() {
        setActiveSlide(prev => prev - 1);
    }

    return (
        <div className="slideShow">
            <Controls >
                <ControlButton color={"indigo"}
                               onClick={handleBack}
                               disabled={activeSlide === 0}>
                    back
                </ControlButton>

                <ControlButton color={"indigo"}
                               onClick={handleNext}
                               disabled={activeSlide === maxSlides - 1}>
                    next
                </ControlButton>
            </Controls>
            <Slides>
                { slides.map((step, index) => (
                    <StepCard
                        className="step-card"
                        key={index}
                        step={step}
                        time={step.duration}
                        isActive={index === activeSlide}
                    />
                ))}
            </Slides>
        </div>
    )
};