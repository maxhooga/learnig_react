import React, { useState } from "react";
import AccountsIntrests from "./AcconutsIntrests";
import "./FirstEnter.css"

function FirstEnter() {

  return (
    <div className="container">
      <AccountsIntrests />
      <div>
          <button>previous step</button>
          <button>next step</button>
      </div>
    </div>
  );

}
export default FirstEnter;