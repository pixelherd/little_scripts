// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react'
import { render } from 'react-dom'
import {Provider} from "../hooks";
import {Page} from '../components/Page'
import {rootReducer} from '../reducers/rootReducer'

const scriptID = 1;
const little_script = {
    id: 1,
    title: "Test Script",
    total_seconds: 300 + 120 + 180,
    steps: [{id: 1, name: "First Step", duration: 300},
        {id: 2, name: "Second Step", duration: 120},
        {id: 3, name: "Third Step", duration: 180}]
};
let startTime = Date.now();
let endTime = startTime + little_script.total_seconds * 1000;
let timers = [];
little_script.steps.forEach(step => timers.push(step.duration * 1000) );
export const initialTimings = {
    total_seconds: little_script.total_seconds,
    all_timers: timers,
    past: 0,
    future: little_script.total_seconds * 1000,
    past_timers: [],
    current_timer: timers[0],
    future_timers: timers.slice(1),
    startTime: startTime,
    finishTime: endTime,
    delayStarted: 0,
    prevProgressTimestamp: startTime,
    progress: 1
};
export const initialNav = {
    activeSlideIdx: 0,
    isPlaying: true
};
export const init = {
    globalCounter: 0,
    data: {
        title: little_script.title,
        slides: little_script.steps,
    },
    timings: initialTimings,
    nav: initialNav
};
document.addEventListener('DOMContentLoaded', () => {
     render(
         <Provider initialState={init} reducer={rootReducer}>
             <Page id={scriptID} show={true}/>
         </Provider>,
    document.getElementById('root'),
    )}
);


