import React from "react";
import ReactDOM from "react-dom";
import Page from '../components/Page';
import {configureStore} from "../store";

const startPlayThrough = (e) => {
    const scriptID = e.target.id;
    // select the section that has our data
    let nodes = Array.from(document.querySelectorAll(".rNode"));
    let single_data = store.getState().scripts[0];

    ReactDOM.render(
        <Page id={scriptID} little_script={single_data}/>,
        document.getElementById('root'),
    )
};

document.addEventListener('DOMContentLoaded', () => {
    const pageState = {};
    const nodes = Array.from(document.querySelectorAll(".rNode"));
    pageState["scripts"] = nodes.map(node => JSON.parse(node.getAttribute('store.js')));
    const preloadedState = localStorage.state ? JSON.parse(localStorage.state) : pageState;
    let store = configureStore(preloadedState);
    window.store = store;
    const goButtons = document.querySelectorAll('.go-button');
    goButtons.forEach(button => button.addEventListener("click", startPlayThrough))

});