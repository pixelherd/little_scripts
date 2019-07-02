import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer'

const addLoggingToDispatch = store => next => action => {
    console.log("old state: ", store.getState());
    console.log("action: ", action);
    next(action);
    console.log("new state: ", store.getState())
};

// function applyMiddlewares(store, middlewares) {
//     let dispatch = store.dispatch;
//     middlewares.forEach(ware => dispatch=ware(store)(dispatch));
//     return Object.assign({}, store, { dispatch })
// }

export const configureStore = (preloadedState = {}) => {
    const store = createStore(rootReducer, preloadedState, applyMiddleware(addLoggingToDispatch));
    store.subscribe(() => {
        localStorage.state = JSON.stringify(store.getState());
    });
    return store;
};

