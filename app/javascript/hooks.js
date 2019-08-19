import React, {createContext, useContext, useReducer, useState, useEffect, useCallback, useRef} from "react";
import {audioMiddleware} from "./audio/audio_middleware";


// useGlobals: for sticking a root reducer in the top-level context,
// and also for writing "context.consumer" fewer times
export const GlobalContext = createContext();
export const Provider = ({reducer, initialState, children}) =>(
    <GlobalContext.Provider value={useEnhancedReducer(reducer, initialState, [audioMiddleware])}>
        {children}
    </GlobalContext.Provider>
);
export const useGlobals = () => useContext(GlobalContext);


// source: https://github.com/shiningjason/react-enhanced-reducer-hook
export const useEnhancedReducer = (reducer, initialState, middlewares = []) => {
    const hook = useState(initialState)
    let state = hook[0]
    const setState = hook[1]
    const dispatch = action => {
        state = reducer(state, action)
        setState(state)
        return action
    }
    let enhancedDispatch
    const store = {
        getState: () => state,
        dispatch: (...args) => enhancedDispatch(...args)
    }
    const chain = middlewares.map(middleware => middleware(store))
    enhancedDispatch = compose.apply(void 0, chain)(dispatch)
    return [state, enhancedDispatch]
}
function compose(...fns) {
    if (fns.length === 0) return arg => arg
    if (fns.length === 1) return fns[0]
    return fns.reduce((a, b) => (...args) => a(b(...args)))
}

export default useEnhancedReducer


// useEventListener
// source: usehooks.com
// Usage
// function App(){
//     // State for storing mouse coordinates
//     const [coords, setCoords] = useState({ x: 0, y: 0 });
//
//     // Event handler utilizing useCallback ...
//     // ... so that reference never changes.
//     const handler = useCallback(
//         ({ clientX, clientY }) => {
//             // Update coordinates
//             setCoords({ x: clientX, y: clientY });
//         },
//         [setCoords]
//     );
//
//     // Add event listener using our hook
//     useEventListener('mousemove', handler);
//
//     return (
//         <h1>
//             The mouse position is ({coords.x}, {coords.y})
//         </h1>
//     );
// }

// Hook
function useEventListener(eventName, handler, element = window){
    // Create a ref that stores handler
    const savedHandler = useRef();

    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(
        () => {
            // Make sure element supports addEventListener
            // On
            const isSupported = element && element.addEventListener;
            if (!isSupported) return;

            // Create event listener that calls handler function stored in ref
            const eventListener = event => savedHandler.current(event);

            // Add event listener
            element.addEventListener(eventName, eventListener);

            // Remove event listener on cleanup
            return () => {
                element.removeEventListener(eventName, eventListener);
            };
        },
        [eventName, element] // Re-run if eventName or element changes
    );
};
