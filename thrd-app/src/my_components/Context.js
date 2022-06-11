import React, { createContext, useState } from "react";

export const Context = createContext()

export const CurrentProvider = ({children}) => {
    const state = {
        value : ''
    }//quiz
    const [context, setContext] = useState(state);

    return(
        <Context.Provider value = {[context, setContext]}>
            {children}
        </Context.Provider>
    )
}
