import React, { useState } from "react";

function Intrest(props) {

  const {intrest, choosedIntrest} = props;
  return (
    <div 
      className={ intrest.isChoosed ? "image pickedIntrest " : "image intrest" } 
      onClick={() => { choosedIntrest(intrest) }}
      >
      <img 
        className="image_img" 
        src={ intrest.image }
      />
      <div 
        className="image_overlay">
              <p className="image_description">
                { intrest.description }
              </p>
          </div>
    </div>
  );
}

export default Intrest;