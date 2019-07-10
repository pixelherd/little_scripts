import React, {useState, useReducer} from "react";
import "./app_nav.scss";
import {ControlButton, Controls} from './ControlButton';


function reducer (state, action) {
    switch(action.type) {
        case 'PAUSE':
            return { isPlaying: false};
        case 'PLAY':
            return { isPlaying: true};
        default: return state
    }
}

export const AppNav = (props) => {

    const initialState = {isPlaying: props.isPlaying};
    const [state, dispatch] = useReducer(reducer, initialState);


    let handleClose = (e) => {
        e.preventDefault();
        window.history.go(-1)
    };

    return (
        <nav className="app-nav">
            <ControlButton label="restart"
                           className="app-button"
                           onClick={() => dispatch({type: 'RESTART'})}
            >
                <span> &#x23EE;</span>
                <span> restart</span>
            </ControlButton>
            {state.isPlaying ?
                <ControlButton label="pause"
                           className="app-button"
                           onClick={() => dispatch({type: 'PAUSE'})}>
                <span>&#x23EF;</span>
                    <span>pause</span>
                </ControlButton> :
                <ControlButton label="play"
                               className="app-button"
                               onClick={() => dispatch({type: 'PLAY'})}>
                <span> &#x23EF;</span>
                <span>  play</span>
                </ControlButton>
            }
            <ControlButton label="finish"
                           className="app-button"
                           onClick={handleClose}>
                <span> &#x23ED;</span>
                <span> finish</span>
            </ControlButton>
        </nav>
    )
};