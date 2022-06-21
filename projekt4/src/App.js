import React, { useState } from "react";
import AccountsIntrests from "./firstEnter/AcconutsIntrests";
import FirstEnter from "./firstEnter/FirstEnter";
import Intrest from "./firstEnter/Intrest";


function App() {


  return (
    <AccountsIntrests />
  );

}
export default App;

/*

  const choiceHandler = (argv) => {
    console.log(argv)
  }
    <>
      <Intrest
        id={ `${"name"} - ${Math.random()}` }
        image={"https://i.pinimg.com/564x/9b/81/4a/9b814aa5e997622dcff2797df98ccdcf.jpg"}
        description={"it is description"}
        isChoosen={false}
        choiceHandler={ choiceHandler }
      />
    </>
*/