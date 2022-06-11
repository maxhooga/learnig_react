import React, { useReducer, createContext } from "react";


const initialState = {
    quantity: 0,
    isVisible: true,
    items: []
}

const reducer = (state, action) => {
    //console.log(state.items)
    switch(action.type){
        case "ADD":
            return{...state, quantity: state.quantity+1, items: [...state.items, action.payload]};
        case "IS_VISIBLE":
            return{...state, isVisible: !state.isVisible};
        case "SORT":
            return{...state, items: 
                state.items.sort((elementA, elementB) => {
                    if(elementA.id < elementB.id) return -1;
                    if(elementA.id > elementB.id) return 1;
                    return 0;
            })}
        default:
            return{...state};
    }
}

export const Context = createContext();

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <Context.Provider value={ [state, dispatch] }>
            {children}
        </Context.Provider>
    )
}

