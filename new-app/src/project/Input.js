import React from "react";

function Input(props) {
     return (
       <>
            <input
                type={ props.type }
                value={ props.value }
                onChange={ (e) => props.changeHandler(e) }
            />
       </>
     )
}
export default Input;