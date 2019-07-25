import playReducer from "./playReducer";

export const rootReducer = ((state, action) => {
    let history = state.history.concat({...state});

    if (action.type === "RESTART") {
        return {
            ...playReducer(state.history[0], action), history: history
        }
    }
    return {...playReducer(state, action), history: history}
});