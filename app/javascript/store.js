import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer'
import lilScriptsReducer from "./reducers/lilScriptsReducer";

const addLoggingToDispatch = store => next => action => {
    console.log("old state: ", store.getState());
    console.log("action: ", action);
    next(action);
    console.log("new state: ", store.getState())
};

export const configureStore = (preloadedState = {}) => {
    const store = createStore(lilScriptsReducer, preloadedState,
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    store.subscribe(() => {
        localStorage.state = JSON.stringify(store.getState());
    });
    return store;
};

