// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import React from 'react'
import ReactDOM, { render } from 'react-dom'
import Page from '../components/Page'

const scriptID = 1;
const little_script = {
    id: 1,
    title: "Test Script",
    steps: [{id: 1, name: "First Step", duration: 60},
        {id: 2, name: "Second Step", duration: 60},
        {id: 3, name: "Third Step", duration: 60}]
};

document.addEventListener('DOMContentLoaded', () => {
     ReactDOM.render(
        <Page id={scriptID} little_script={little_script}/>,
    document.getElementById('root'),
    )}
);