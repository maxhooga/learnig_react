import React, { useState } from "react";

function Intrest(props) {

  const {intrest, choosedIntrest} = props;

  return (
    <div onClick={() => { choosedIntrest(intrest) }}>
      { intrest.name }
      <img src={ intrest.image } className="image" />
    </div>
  );
}

export default Intrest;