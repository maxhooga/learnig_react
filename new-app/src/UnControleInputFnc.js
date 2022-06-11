import React, { useRef } from "react";

const UnControleInputFnc = () => {

    const exampleRef = useRef(null);
    const clickHandler = () => {
        console.log(exampleRef)
    }
    return(
        <div className="col s5">
            <input 
                type="text"
                ref={ exampleRef }
            />
            
            <button className="waves-effect waves-light btn-large" onClick={ clickHandler }>press me</button>
        </div>
            
    )
}

export default UnControleInputFnc