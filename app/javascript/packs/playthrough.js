import React from "react";
import ReactDOM from "react-dom";
import Page from '../components/Page';
import {configureStore} from "../store";
import {Route, HashRouter} from "react-router-dom";

const Root = ( { props }) => (
    <HashRouter>
        <Route path="/" component={Page} />
        <Page props = {props}/>
    </HashRouter>
);

const startPlayThrough = (e) => {
    const scriptID = e.target.id;

    let little_script = getScriptFromStore(scriptID);

    // TODO figure out how to yield to server-side if we can't get the script

    // set up browser history
    let currentPage = document.location.pathname + scriptID; // eg "/"
    document.title = '#' + currentPage;
    history.pushState(currentPage, document.title, '#' + currentPage);

    ReactDOM.render(
        <Page id={scriptID} little_script={little_script}/>,
        document.getElementById('root'),
    )
};

document.addEventListener('DOMContentLoaded', () => {
    // are we reloading from a play-through?
    const pageState = {};
    const nodes = Array.from(document.querySelectorAll(".rNode"));
    pageState["scripts"] = nodes.map(node => JSON.parse(node.getAttribute('data')));
    const preloadedState = localStorage.state ? JSON.parse(localStorage.state) : pageState;
    let store = configureStore(preloadedState);
    window.store = store;
    const goButtons = document.querySelectorAll('.go-button');
    if (history.state) {
        goButtons.forEach(button => button.addEventListener("click", continuePlayThrough))
        continuePlayThrough();
    }
    else {}
    goButtons.forEach(button => button.addEventListener("click", startPlayThrough))
});

const continuePlayThrough = () => {
    let currentPage = history.state.slice(-1);
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