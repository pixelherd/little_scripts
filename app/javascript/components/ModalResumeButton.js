import React, {useState} from 'react'
import {useGlobals} from "../hooks";
import {resumePlaythrough} from '../reducers/actions';


export const ModalResumeButton = ({show}) => {
    const [state, dispatch] = useGlobals();
    const [showing, setShowing] = useState(show);

    if (!showing && state.nav.isPlaying) {
        return null;
    }

    const handleResume = () => {
        setShowing(false);
        let timestamp = Date.now();
        dispatch(resumePlaythrough(timestamp));
    };

    return(
        <div className="modal-sheet" onClick={handleResume}>
            <button onClick={handleResume} autoFocus={true} tabIndex={0}>RESUME</button>
        </div>
    )

};
