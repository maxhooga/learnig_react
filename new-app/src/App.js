import React, { useContext } from "react";
import Phone_input from "./project/Phone_input";

function App() {
  return (
    <React.Fragment>
      <Phone_input />
    </React.Fragment>
  )
}
export default App;

/*
import React, { useContext } from "react";
import { Context } from "./studing_reducer_context/Context";

function App() {
  const [state, dispatch] = useContext(Context);
  return (
    <React.Fragment>
      <h1>
        { state.counter }
      </h1>
      <button onClick={() => {
        dispatch({ type: "ADD", payload: 2 })
      }}>add</button>
      <button onClick={() => {
        state.minus();
      }}>sub</button>
    </React.Fragment>
  )
}
export default App;

*/