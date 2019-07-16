import React, {createRef, useState, useReducer} from "react";
import "./page.scss";
import {Slides, StepCard} from './StepCard';
import {Controls, ControlButton} from './ControlButton';
import {AppNav} from './AppNav'

export function reducer (state, action) {
    switch(action.type) {
        case 'PAUSE':
            return { isPlaying: false};
        case 'PLAY':
            return { isPlaying: true};
        default: return state
    }
}

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
                    <header>
                        <h1>{this.props.little_script.name}</h1>
                        <AppNav isPlaying="true" /></header>
                    <article className="script">
                        <SlideShow slides={steps} />
                    </article>
                </div>

        )
    }
}

export default Page

// TODO add valid html for keyboard controls

const SlideShow = ({slides}) => {
    const [activeSlide, setActiveSlide] = useState(0);
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
                <ControlButton color={"purple-accent"}
                               onClick={handleBack}
                               disabled={activeSlide === 0}>
                    back
                </ControlButton>

                <ControlButton color={"purple-accent"}
                               onClick={handleNext}
                               disabled={activeSlide === maxSlides - 1}
                               autofocus={!(activeSlide === maxSlides - 1)}>
                    next
                </ControlButton>
            </Controls>
            <Slides>
                { slides.map((step, index) => (
                    <StepCard
                        className="step-card"
                        key={index}
                        name={step.name}
                        time={step.duration}
                        isActive={index === activeSlide}
                    />
                ))}
            </Slides>
        </div>
    )
};