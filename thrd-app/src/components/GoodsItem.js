import React, { useContext } from "react";
import { Context } from "../ContextReducer/ContextReducer";

function GoodsItem(props) {
    const [state, dispatch] = useContext(Context);
    const { id, name, description,full_background, price } = props;
    return(
        <div className="card" >
            <div className="card-image">
            <img src={ full_background } />
            </div>
            <div className="card-content">
            <p>{ description }</p>
            <div className="card-action">
                <button 
                    className="btn" 
                    onClick={ 
                        () => dispatch({
                            type: "ADD", 
                            payload: {
                                id: props.id,
                                name: props.name,
                                price: props.price,
                                index: props.index
                            }
                        })}>buy</button>
                <span className="right">{ price }$</span>
            </div>
            </div>
        </div>
    )
}
export default GoodsItem