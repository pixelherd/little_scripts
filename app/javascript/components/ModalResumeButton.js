import React, {useState} from 'react'
import {useGlobals} from "../hooks";


export const ModalResumeButton = ({show}) => {
    const [state, dispatch] = useGlobals();
    const [showing, setShowing] = useState(show);

    if (!showing && state.isPlaying) {
        return null;
    }

    function handleRestart(){
        dispatch({type:'RESUME'});
        setShowing(false);
    }
    return(
        <div className="modal-sheet" onClick={handleRestart}>
            <button onClick={handleRestart} autoFocus={true} tabIndex={0}>RESUME</button>
        </div>
    )

};