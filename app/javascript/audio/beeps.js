export const halway_beep = [941, 1477] // touch pad keys have dual tone frequencies

export const play_end_beep = (instrument) => {
    instrument.triggerAttackRelease('G4', '8n', 0.25);
    instrument.triggerAttackRelease('G4', '8n', 1);
    instrument.triggerAttackRelease('C4', '8n', 1.25);
}
