import React, { useState } from "react";
import OTPBox from "./OTPBox";
import PhoneInput from "./PhoneInput";
import EmailInput from "./EmailInput";
import InputValidation from "./InputValidation";

function Registration() {
  const [state, setState] = useState("phoneInput");
  const apiHandle = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(false)
    }, 1000);
  })
  
  const clickHandler = (switchto) => {
    apiHandle().then(
      () => setState(switchto)
    )
  }

  const switchTo = () => {
    switch(state){
      case "phoneInput":
        return <PhoneInput clickHandler={ clickHandler } />
      case "OTPBox":
        return <OTPBox clickHandler={ clickHandler } />
      case "emailInput":
        return <EmailInput clickHandler={ clickHandler }/>
    }
  }

  return (
    <div  className="container">
      { switchTo() }
    </div>
  );

}
export default Registration;