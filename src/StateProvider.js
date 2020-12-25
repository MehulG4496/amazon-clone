import React, { createContext, useContext, useReducer } from "react";

// This is Data Layer
export const StateContext = createContext();

// Build Provider 
export const StateProvider = ({ reducer, intialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, intialState)}>
        {children}
    </StateContext.Provider>
);

// using inside of component
export const useStateValue= () => useContext(StateContext);