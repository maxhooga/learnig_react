import React from "react";

function Input(props) {
  

    return (
        <>
            <input
                className={ props.className }
                type="text"
                placeholder={ props.placeholder }
                value={ props.value }
                onChange={ props.onChange }
                maxLength={ props.maxLength || ""}
                onFocus={ props.onFocus }
            />
        </>
            
    );
}

export default Input;