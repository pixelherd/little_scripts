//based on: https://github.com/cliffhall/react-dtmf-dialer

import TouchTone from './TouchTone';
import {PLAY_HALFWAY_BEEP, PLAY_END_BEEP} from "../reducers/actions";
import {halway_beep} from "./beeps";


export const audioMiddleware = ({ getState }) => {


    return next => action => {

        switch (action.type) {

            case PLAY_HALFWAY_BEEP:
                let touchTone = new TouchTone();
                touchTone.play(halway_beep);
                break;
            case PLAY_END_BEEP:
                //play some notes at specified times
                // let synth = new Tone.Synth().toMaster()
                //
                // play_end_beep(synth);
                break;
            default:
                break;

        }

        next(action);
    }

};
