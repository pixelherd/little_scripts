import React, {createRef, useState, useReducer} from "react";
import "./page.scss";
import {Slides, StepCard} from './StepCard';
import {Controls, ControlButton} from './ControlButton';
import {NavToolbar} from './NavToolbar'
import {useGlobals} from "../hooks";
import {ProgressPanel} from "./ProgressPanel";
import {ProgressBar} from "./ProgressBar";
import {PuppetClock} from "./PuppetClock";

export const Page = (props) => {
    const [showing, setIsShowing] = useState(props.show);
    const [state, dispatch] = useGlobals();
    let dynamicName = state.isPlaying ? 'active' : 'paused';

    let startClock = <PuppetClock time={state.startTime}/>;
    let endClock = <PuppetClock time={state.finishTime} />;
    let progressBar = <ProgressBar isActive={state.isPlaying}
                                   maxValue={100}
                                   progress={state.progress}/>;

    function handleFinish() {
        dispatch({type: 'FINISH'});
        setIsShowing(showing => !showing)
    }
    if (!props.show || !showing) {
        return null;
    }
    return (
       <div className="playThroughScreen" id={`play-through-screen-${dynamicName}`}>
            <NavToolbar />
                <main className="script">

                    <h1 className="script-title">{state.data.title}</h1>

                        <SlideShow />

                    <ProgressPanel leftClock={startClock} progressBar={progressBar} rightClock={endClock}/>
                </main>

       </div>

    )
};

// TODO add valid html for keyboard controls

export const SlideShow = (props) => {
    const [state, dispatch] = useGlobals();
    const maxSlides = state.data.slides.length;
    let activeSlideIdx = state.activeSlideIdx;

    return (
        <div className="slideShow">
            <Controls >
                <ControlButton color={"purple-accent"}
                               onClick={()=> dispatch({type:'PREV_SLIDE', idx: activeSlideIdx})}
                               disabled={activeSlideIdx===0}>
                    back
                </ControlButton>

                <ControlButton color={"purple-accent"}
                               onClick={()=> dispatch({type:'NEXT_SLIDE', idx: activeSlideIdx})}
                               disabled={activeSlideIdx===maxSlides - 1}
                               autofocus={!(activeSlideIdx === maxSlides - 1)}>
                    next
                </ControlButton>
            </Controls>
            <Slides>
                { state.data.slides.map((step, index) => (
                    <StepCard
                        className="step-card"
                        key={index}
                        id={step.id}
                        name={step.name}
                        time={step.duration}
                        isActive={index === activeSlideIdx}
                    />
                ))}
            </Slides>

        </div>
    )
};