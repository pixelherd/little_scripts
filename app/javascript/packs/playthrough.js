import React from "react";
import {Provider} from "react-redux";
import ReactDOM from "react-dom";
import Page from '../components/Page';
import {configureStore} from "../store";

window.onpopstate = (e) => {
    let re = new RegExp('#/*');
    if (re.test(document.location.toString())) {
        continuePlayThrough();
    } else {
        document.location.reload()
    }
};

function startPlayThrough(e){
    const scriptID = e.target.id;

    let little_script = getScriptFromStore(scriptID);

    // TODO figure out how to yield to server-side if we can't get the script

    // set up browser history
    let currentPage = document.location.pathname + "#/" + scriptID; // eg "/"
    console.log(currentPage);
    document.title = "Play-Thorough";
    history.pushState(currentPage, document.title, currentPage);

    // TODO refactor to mount 'body' rather than 'root'? No use in having the header of host page hanging around
    ReactDOM.render(
        <Page id={scriptID} little_script={little_script}/>,
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
    let re = new RegExp('#/*');
    if (re.test(document.location.toString())) {
        continuePlayThrough();
    } else {
    }
});


const continuePlayThrough = () => {
    // TODO routing this will need a rethink re. step by step navigation
    let currentPage = document.location.toString().slice(-1);
    let script = getScriptFromStore(currentPage);
    console.log(currentPage);
    ReactDOM.render(
        <Page id={currentPage} little_script={script}/>,
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
