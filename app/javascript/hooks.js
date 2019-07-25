import React, {createContext, useContext, useReducer} from "react";

export const GlobalContext = createContext();
export const Provider = ({reducer, initialState, children}) =>(
    <GlobalContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </GlobalContext.Provider>
);
export const useGlobals = () => useContext(GlobalContext);
