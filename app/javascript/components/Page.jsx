import React, {createRef, useState, useEffect, useReducer} from "react";
import "../../assets/stylesheets/page.scss";
import {nextSlide, prevSlide, pausePlaythrough, restartPlaythrough} from "../reducers/actions"
import {Slides, StepCard} from './StepCard';
import {Controls, ControlButton} from './ControlButton';
import {NavToolbar} from './NavToolbar'
import {useGlobals} from "../hooks";
import {ProgressPanel} from "./ProgressPanel";
import {ProgressBar} from "./ProgressBar";
import {PuppetClock} from "./PuppetClock";

export const Page = ({id, show, init}) => {
    const [showing, setIsShowing] = useState(show);
    const [state, dispatch] = useGlobals();
    let dynamicName = state.nav.isPlaying ? 'active' : 'paused';

    let startClock = <PuppetClock time={state.timings.startTime}/>;
    let endClock = <PuppetClock time={state.timings.finishTime} />;
    let progressBar = <ProgressBar isActive={state.nav.isPlaying}
                                   maxValue={100}
                                   progress={state.timings.progress}/>;
    function handleFinish() {
        dispatch({type: 'FINISH'});
        setIsShowing(showing => !showing)
    }
    if (!show || !showing) {
        return null;
    }
    return (
       <div className="playThroughScreen" id={`play-through-screen-${dynamicName}`}>
            <NavToolbar initialState={init} />
                <main className="script">

                    <h1 className="script-title">{state.data.title}</h1>

                        {/*Pass globalCounter as a key so that the whole  shebang re-renders on reset*/}
                        <SlideShow key={state.globalCounter}/>

                        <ProgressPanel leftClock={startClock} progressBar={progressBar} rightClock={endClock}/>
                </main>

       </div>

    )
};

// TODO add valid html for keyboard controls

export const SlideShow = (props) => {
    const [state, dispatch] = useGlobals();
    const maxSlides = state.data.slides.length;
    let activeSlideIdx = state.nav.activeSlideIdx;

    return (
        <div className="slideShow">
            <Controls >
                <ControlButton color={"purple-accent"}
                               onClick={()=> dispatch(prevSlide(activeSlideIdx, Date.now()))}
                               disabled={activeSlideIdx===0}>
                    back
                </ControlButton>

                <ControlButton color={"purple-accent"}
                               onClick={()=> dispatch(nextSlide(activeSlideIdx, Date.now()))}
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
