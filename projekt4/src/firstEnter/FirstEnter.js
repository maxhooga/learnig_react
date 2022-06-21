import React, { useState } from "react";
import AccountsIntrests from "./AcconutsIntrests";

function FirstEnter() {

  return (
    <div>
      <AccountsIntrests />
      <div>
          <button>previous step</button>
          <button>next step</button>
      </div>
    </div>
  );

}
export default FirstEnter;