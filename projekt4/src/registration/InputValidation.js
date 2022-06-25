import React, { useState } from "react";

const InputValidation = (props) => {
    const initialState = {
        validation: {
            isValid: false,
            emailRegex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            phoneRegex: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
        },
        inputContent: {
            value: ''
        },
        inputStyle: {
            style: "phoneInputStyle",
            type: props.type
        }
    }
    const [state, setState] = useState(initialState);

    const validateValue = (value, valueType) => {
        switch(valueType){
            case "phone":
                return state.validation.phoneRegex.test(value);
            case "email":
                return state.validation.emailRegex.test(value);
            default:
                console.log("When validating value, valueType was not specified");
                return -1;
        }
    }

    const changeHandler = (e) => {
        let validationResult = validateValue(e.target.value, state.inputStyle.type)
        setState({...state,
            validation: {
                ...state.validation,
                isValid: validationResult
            },
            inputContent: {
                ...state.inputContent,
                value: e.target.value
            },
            inputStyle: {
                ...state.inputStyle,
                style: validationResult ? initialState.inputStyle.style : state.inputStyle.style.concat(" notValid")
            }
        });
    }

    const switchTo = () => {
        switch(props.type){
            case "phone":
                return <input
                    placeholder={ "enter your phone number" }
                    value={ state.inputContent.value }
                    onChange={ changeHandler }
                />;
            case "email":
                return <input
                    placeholder={ "enter your email" }
                    value={ state.inputContent.value }
                    onChange={ changeHandler }
                />;
        }
    }

    return (
        <div className={state.inputStyle.style}>
            { switchTo() }
        </div>
    )
}

export default InputValidation;