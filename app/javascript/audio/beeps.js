import TouchTone from './TouchTone';

let touchTone = new TouchTone();

const higher_beep = [941, 1477] // touch pad keys have dual tone frequencies
const lower_beep = [697, 1477] // touch pad keys have dual tone frequencies

export const play_halfway_beep = () => {
    touchTone.play(higher_beep, 1);
}

export const play_end_beep = () => {
    touchTone.play(higher_beep, 0.5);
        setTimeout(
            () => {
                touchTone.play(higher_beep, 0.25);
            }, 750);
        setTimeout(
            () => {
                touchTone.play(lower_beep, 0.5);
            }, 1000);
}
