import React, { useState } from "react";
import styled from "styled-components";

const DescriptionStyle = styled.div`
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-image: linear-gradient(transparent, black);
    width: 100%;
    color: white;
    display: flex;
    flex-direction: column;
`;

const Price = styled.div`
    color: white;
`;
const Text = styled.h3`
    color: white;
    font-family: sans-serif;
    font-size: 25px;
    padding: 25px;
    width: 80%;
`;

function Description(props) {
    const { price, description } = props;
    return (
        <DescriptionStyle>
            <Price>
                { price }
            </Price>
            <Text>
            { description }
            </Text>
        </DescriptionStyle>
    );

}
export default Description;