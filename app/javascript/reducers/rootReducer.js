import playReducer from "./playReducer";

export const rootReducer = ((state, action) => {

    // global counter effectively serves as a unique ID
    // for the slideshow, so that all timers reset at playthrough restart

    let historyCounter = state.globalCounter;

    if (action.type === "RESTART") {
        const {initialState} = action;
        return {
            ...playReducer(initialState, action),
            globalCounter: historyCounter + 1
        }
    }
    return {...playReducer(state, action), globalCounter: historyCounter}
});
