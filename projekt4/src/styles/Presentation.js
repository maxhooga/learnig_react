import React, { useState } from "react";
import { BasicStyle, StyleWithProps, Animation, Temp, Parent, Wrapper } from "./Body.styles";
import Button from "./Button";

function Presentation() {
    const [state, setState] = useState(0);
    const activeSlide = (num) => {
        setState(state+num);
    }
    return (
        <>
            { state }
            <Wrapper height="250px" width="250px">
                { state == 0 ?
                    <BasicStyle>Basic style</BasicStyle> 
                    : null
                }
                { state == 1 ?
                    <>
                        <StyleWithProps>its props</StyleWithProps> 
                        <StyleWithProps backgroundColor="#10374f">press me</StyleWithProps>
                        <StyleWithProps>press me</StyleWithProps>
                    </>
                    : null 
                }
                { state == 2 ? 
                    <Animation>this is animation</Animation> 
                    : null
                }
                { state == 3 ?  
                    <Parent>
                        <Temp>this is temp</Temp>
                    </Parent> 
                    : null
                }
                { state == 4 ?
                    <Button buttonLabel="click me"></Button> 
                    : null
                }
            </Wrapper>
            <Wrapper height="25px" flexDirection="row">
                <button onClick={() => activeSlide(-1)}>dec</button>
                <button onClick={() => activeSlide(1)}>inc</button>
            </Wrapper>
            
        </>
    );

}
export default Presentation;