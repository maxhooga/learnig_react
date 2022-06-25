import React, { useState } from "react";
import styled from "styled-components";
import Image from "./Image";
import Description from "./Description";
import Function from "./Function";


const CardStyle = styled.div`
  position: relative;
  max-width: ${props => props.width};
  width: ${props => props.width};
  height: ${props => props.height};
  overflow: hidden;
  margin: 10px;
`;

function Card(props) {
  const { width, height, description, price, image, xxl } = props;
  return (
    <CardStyle
      width = { `calc(${width}*100vw)` }
      height = { height ? height : `calc(${width}*100vw / 1.6) ` }
    >
      <Image 
        image = { image }
      />
      <Description 
        description = { description }
        price = { price }
      />
      <Function />
    </CardStyle>
  );

}
export default Card;
// scale метрики
// откуда знать размер экрана
// 1.6 Золотое сечение
//@media