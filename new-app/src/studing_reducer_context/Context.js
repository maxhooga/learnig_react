import React, { createContext, useContext, useState } from "react";
import { useReducer } from "react";

const initialState = {
    counter: 0,
}
const reducer = (state, action) => {
    if(action.type === "ADD"){
        return{//return to state
            ...state, counter: state.counter+action.payload
        }
    }
    if(action.type == "SUB"){
        return{
            ...state, counter: state.counter-1
        }
    }
    
}

export const Context = createContext();

export const ContextProvider = ({children}) => {

    //const [state, setState] = useState(initialState);
    const [state, dispatch] = useReducer(reducer, initialState)
    state.minus = () => {dispatch({ type: "SUB" })}
    return(
        <Context.Provider value={ [state, dispatch] }>
            { children }
        </Context.Provider>
    )
}