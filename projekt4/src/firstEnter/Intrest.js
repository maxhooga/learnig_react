import React, { useState } from "react";
import { IntrestStyle } from "./FirstEnter.style";

function Intrest(props) {
  console.log(props.isChoosen);
  const initialState = {
    id:             props.id,
    image:          props.image,
    description:    props.description,
    isChoosen:      props.isChoosen,
    choiceHandler:  props.choiceHandler
  }

  return (
    <IntrestStyle
      imageWidth="150px"
      imageHeight="150px"
      choosen = { 
        props.isChoosen ? 
        "5px solid red" :
        "5px solid black"
      }
    >
      <div  onClick={() => { initialState.choiceHandler(
        {
          id: initialState.id,
          isChoosen: initialState.isChoosen
        }
      ) }}>
        <img className="image_img" src={ initialState.image }/>
        <div className="image_overlay">
          <p className="image_description">
            { initialState.description }
          </p>
        </div>
      </div>
    </IntrestStyle>
  );
}

export default Intrest;