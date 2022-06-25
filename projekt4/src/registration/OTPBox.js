import React, { useState } from "react";
import Input from "./Input";

function OTPBox(props) {
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const changeHandler = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((item, i) => (i === index) ? element.value : item )]);

        //Focus next input
        if(element.nextSibling) {
            element.nextSibling.focus();
        }
    }
    return (
        <div>
            <div className="otpStyle">
                {otp.map((item, index) => {
                    return(
                        <Input
                            className= { "otpStyleInput" }
                            key={ index }
                            value={ item }
                            maxLength="1"
                            onChange={e => changeHandler(e.target, index)}
                            onFocus={e => e.target.select()}
                        />
                    )
                })}  
            </div>
            
            
                <button
                    onClick={ () => props.clickHandler("phoneInput") }
                >change phone/email</button>
            
            
        </div>
    );
}

export default OTPBox;