import React, { useState } from "react";
import Input from "./Input";

function EmailInput(props) {
    const initialState = {
        isValid: false,
        value: '',
        style: "phoneInputStyle"

    }
    const [state, setState] = useState(initialState);
    
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return regex.test(email);
    }

    const changeHandler = (e) => {
        let validation = validateEmail(e.target.value);
        setState({...state,
            value: e.target.value,
            isValid: validation,
            style: validation ? initialState.style : state.style.concat(" notValid")
        });
    }

    return (
        <div>
            <div className={state.style}>
                <Input 
                    placeholder={ "enter your email" }
                    value={ state.value }
                    onChange={ changeHandler }
                />
            </div> 
            <button
                disabled={ !state.isValid }
                onClick={ () => props.clickHandler("OTPBox") }
            >send sms</button>
            <button
                onClick={ () => props.clickHandler("phoneInput") }
            >i changed my mind, i`l use my phone</button>
        </div>
    );
}

export default EmailInput;