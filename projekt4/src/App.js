import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AccountsIntrests from "./firstEnter/AcconutsIntrests";
import FirstEnter from "./firstEnter/FirstEnter";
import Intrest from "./firstEnter/Intrest";
import Card from "./Card/Card";

const Small = styled.div`
    display: flex;
    flex-direction: column;
`;
const Big = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {

  return (
    <Big>
      <Card 
        width={ 0.6 }
        description={ "This my life" }
        price={ "120kč" }
        image={ "https://i.pinimg.com/564x/eb/a1/38/eba138faec79b8bd2629e99ad2612047.jpg" }
      />
      <Small>
        <Card 
          width={ 0.4 }
          height={ "50%" }
          description={ "This my life" }
          price={ "120kč" }
          image={ "https://i.pinimg.com/564x/eb/a1/38/eba138faec79b8bd2629e99ad2612047.jpg" }
        />
        <Card 
          width={ 0.4 }
          height={ "50%" }
          description={ "This my life" }
          price={ "120kč" }
          image={ "https://i.pinimg.com/564x/eb/a1/38/eba138faec79b8bd2629e99ad2612047.jpg" }
        />
      </Small>
        
    </Big>
     
  );

}
export default App;

/*

  const choiceHandler = (argv) => {
    console.log(argv)
  }
    <>
      <Intrest
        id={ `${"name"} - ${Math.random()}` }
        image={"https://i.pinimg.com/564x/9b/81/4a/9b814aa5e997622dcff2797df98ccdcf.jpg"}
        description={"it is description"}
        isChoosen={false}
        choiceHandler={ choiceHandler }
      />
    </>
*/