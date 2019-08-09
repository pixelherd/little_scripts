import React from 'react';
import {configureStore} from "../store";
import { render } from 'react-dom'
import {Provider} from "../hooks";
import {Page} from '../components/Page'
import {rootReducer} from '../reducers/rootReducer'

window.onpopstate = (e) => {
    let re = new RegExp('#/*');
    if (re.test(document.location.toString())) {
        window.history.go(-1)
        continuePlayThrough();
    } else {
        document.location.reload()
    }
};

function startPlayThrough(e){


    const scriptID = e.target.id;
    let little_script = getScriptFromStore(scriptID);

    // TODO figure out how to yield to server-side if we can't get the script
    // TODO add error

    // Once the desired LittleScript has been retrieved, make the
    // shape of state nice for timings reducer

    let startTime = Date.now();
    let endTime = startTime + little_script.total_seconds * 1000;
    let timers = [];
    little_script.steps.forEach(step => timers.push(step.duration * 1000) );
    const initialTimings = {
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
    const initialNav = {
        activeSlideIdx: 0,
        isPlaying: true
    };
    const init = {
        globalCounter: 0,
        data: {
            title: little_script.title,
            slides: little_script.steps,
        },
        timings: initialTimings,
        nav: initialNav
    };



    // set up browser history
    let currentPage = document.location.pathname + "#/" + scriptID; // eg "/"

    document.title = "Play-Thorough";
    history.pushState(currentPage, document.title, currentPage);

    // Render a new playthrough

    // TODO refactor to mount 'body' rather than 'root'? No use in having the header of host page hanging around
    render(
        <Provider initialState={init} reducer={rootReducer}>
            <Page id={scriptID} show={true} initialState={init}/>
        </Provider>,
        document.getElementById('root'),
    )
}

document.addEventListener('DOMContentLoaded', () => {

    // set up Redux store, and related housekeeping
    const pageState = {};
    const nodes = Array.from(document.querySelectorAll(".rNode"));
    pageState["scripts"] = nodes.map(node => JSON.parse(node.getAttribute('data')));
    const preloadedState = localStorage.state ? JSON.parse(localStorage.state) : pageState;
    let store = configureStore(preloadedState);
    window.store = store;
    const goButtons = document.querySelectorAll('.go-button');

    // the play-through gets generated on click
    goButtons.forEach(button => button.addEventListener("click", startPlayThrough));

    // are we reloading from an ongoing play-through?
    // TODO continuePlayThrough is broken; let's go back home
    let re = new RegExp('#/*');
    if (re.test(document.location.toString())) {
        window.history.go(-1);

    } else {
    }
});


const continuePlayThrough = () => {
    // TODO routing this will need a rethink re. step by step navigation
    let currentPage = document.location.toString().slice(-1);
    let script = getScriptFromStore(currentPage);
    console.log(currentPage);
    render(
        <Page id={script.id} show={true} initialState={init}/>,
        document.getElementById('root'),
    )
};

const getScriptFromStore = (num) => {
    let scriptID = num;
    let state = store.getState();
    // select the script in the store
    let ids = Object.keys(state.scripts).filter(key => key !== scriptID);
    return ids.map(id => state.scripts[id])[0];
};
