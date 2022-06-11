import React, { useState } from "react";
import Input from "./Input";

function PhoneInput(props) {
    const initialState = {
        isValid: false,
        value: '',
        style: "phoneInputStyle"

    }
    const [state, setState] = useState(initialState);
    
    const validatePhoneNumber = (phone) => {
        const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
        return regex.test(phone);
    }

    const changeHandler = (e) => {
        let validation = validatePhoneNumber(e.target.value);
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
                    placeholder={ "enter you phone number" }
                    value={ state.value }
                    onChange={ changeHandler }
                />
            </div> 
            <button
                disabled={ !state.isValid }
                onClick={ props.clickHandler }
            >send sms</button>
        </div>
    );
}

export default PhoneInput;