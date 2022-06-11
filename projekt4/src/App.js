import React, { useState } from "react";
import OTPBox from "./components/OTPBox";
import PhoneInput from "./components/PhoneInput";

function App() {

  const [state, setState] = useState(true);

  const apiHandle = () => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(false)
    }, 1000);
  })
  
  const clickHandler = () => {
    apiHandle().then(
      () => setState(false)
    )
  }

  return (
    <div className="contaner">
      { state ? <PhoneInput clickHandler={ clickHandler } /> : <OTPBox /> }
    </div>
  );
}

export default App;