//based on: https://github.com/cliffhall/react-dtmf-dialer

import {PLAY_HALFWAY_BEEP, PLAY_END_BEEP} from "../reducers/actions";
import {play_end_beep, play_halfway_beep} from "./beeps";


export const audioMiddleware = ({ getState }) => {

    return next => action => {

        switch (action.type) {

            case PLAY_HALFWAY_BEEP:
                play_halfway_beep();
                break;
            case PLAY_END_BEEP:
                play_end_beep();
                break;
            default:
                break;

        }

        next(action);
    }

};
