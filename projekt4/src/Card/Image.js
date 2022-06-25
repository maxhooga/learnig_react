import React, { useState } from "react";
import styled from "styled-components";

const ImageStyle = styled.img`
    display: block;
    position: absolute;
    width: 100%;
    min-width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;


function Image(props) {

  return (
    <ImageStyle src={ props.image } />
  );

}
export default Image;