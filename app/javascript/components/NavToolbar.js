import React from "react";
import "./app_nav.scss";
import {ControlButton, Controls} from './ControlButton';
import {ModalResumeButton} from "./ModalResumeButton";
import {useGlobals} from "../hooks";
import {pausePlaythrough, restartPlaythrough} from "../reducers/actions";

export const NavToolbar = (props) => {
    const [state, dispatch] = useGlobals();
    const handleClose = (e) => {
        e.preventDefault();
        window.history.go(-1)
    };

    function handleRestart(){
        let timestamp = Date.now();
        return dispatch(restartPlaythrough(timestamp))
    }


    return (
        <nav className="app-nav">
               <ControlButton className="app-button"
                              onClick={handleRestart}
                              icon={"⏮"}
                              label={"restart"}/>
                <ControlButton className="app-button"
                               onClick={() => {dispatch(pausePlaythrough(Date.now()))}}
                               icon={"⏯"}
                               label={"pause"}/>
               <ModalResumeButton show={false}>resume</ModalResumeButton>
               <ControlButton label="finish"
                              icon="⏭"
                          className="app-button"
                          onClick={handleClose}>
               </ControlButton>
        </nav>
    )
};
