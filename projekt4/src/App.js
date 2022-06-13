import React, { useState } from "react";
import OTPBox from "./components/OTPBox";
import PhoneInput from "./components/PhoneInput";
import EmailInput from "./components/EmailInput";
import InputValidation from "./components/InputValidation";

function App() {
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
    <div className="contaner">
      { switchTo() }
    </div>
  );

}
export default App;

  /*
  
  const [state, setState] = useState("phoneInput");


  const switchTo = () => {
    switch(state){
      case "phoneInput":
        return <InputValidation
            type={ "phone" }
          />
      case "emailInput":
        return <InputValidation
                  type={ "email" }
                />
    }
  }

  return(
    <div className="contaner">
      { switchTo() }
    </div>
  )
 

  */