import React, {useState, useReducer} from "react";
import "./app_nav.scss";
import {ControlButton, Controls} from './ControlButton';
import {useGlobals} from "../hooks";
import {ModalResumeButton} from "./ModalResumeButton";

export const NavToolbar = (props) => {

    const [state, dispatch] = useGlobals();

    const handleClose = (e) => {
        e.preventDefault();
        window.history.go(-1)
    };


    return (
        <nav className="app-nav">
               <ControlButton className="app-button"
                              onClick={()=>dispatch({type: "RESTART"})}
                              icon={"⏮"}
                              label={"restart"}/>
                <ControlButton className="app-button"
                               onClick={()=>dispatch({type: "PAUSE"})}
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