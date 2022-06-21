import React, { useState } from "react";
import { BasicStyle, StyleWithProps, Animation, Temp, Parent } from "./Body.styles";
import Button from "./Button";

function Body() {
    const [color, colorSet] = useState();
    const colorSeter = () => {
        return "#90b7cf";
    }
    return (
        <>
            <BasicStyle> this is Body styled</BasicStyle>
            <StyleWithProps backgroundColor="blue">press me</StyleWithProps>
            <StyleWithProps backgroundColor="#10374f">press me</StyleWithProps>
            <StyleWithProps backgroundColor={ colorSeter }>press me</StyleWithProps>
            <Animation>this is animation</Animation>
            <Parent>
                <Temp>this is temp</Temp>
            </Parent>
            <Button buttonLabel="click me
            "></Button>
        </>
    );

}
export default Body;