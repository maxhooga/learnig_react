import React, { useState, useContext, useEffect } from "react";
import { Context } from "../ContextReducer/ContextReducer";

function Cart(props) {
    const [state, dispatch] = useContext(Context)



    return(
        <div className="cart blue darken-4 white-text" onClick={() => {
            dispatch({type : "IS_VISIBLE"})
            dispatch({type : "SORT"})
        }}>
            <i className="material-icons">local_grocery_store</i>
            { state.quantity }
        </div>
    )
}
export default Cart