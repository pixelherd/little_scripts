// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react'
import { render } from 'react-dom'
import {Provider} from "../hooks";
import {Page} from '../components/Page'
import {rootReducer} from '../reducers/rootReducer'
import {getEndTime} from "../utils";

const scriptID = 1;
const little_script = {
    id: 1,
    title: "Test Script",
    steps: [{id: 1, name: "First Step", duration: 60},
        {id: 2, name: "Second Step", duration: 60},
        {id: 3, name: "Third Step", duration: 60}]
};

document.addEventListener('DOMContentLoaded', () => {
     render(
         <Provider initialState={initialState} reducer={rootReducer}>
             <Page id={scriptID} show={true}/>
         </Provider>,
    document.getElementById('root'),
    )}
);

let startTime = Date.now();
let endTime = getEndTime(startTime, little_script.steps);
const initialState = {
    history: [],
    data: {
        title: little_script.title,
        totalSeconds: little_script.total_seconds,
        slides: little_script.steps,
    },
    startTime: startTime,
    finishTime: endTime,
    delayTimestamp: 0,
    activeSlideIdx: 0,
    currentTimer: little_script.steps[0].duration,
    progress: 1,
    isPlaying: true
};