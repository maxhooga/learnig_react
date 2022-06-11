import React, { useState } from "react";

const Component_my = () => {
    const state = {
        array_my: ["value1_my", "value2_my"]
    }
    const [state_my, setState_my] = useState(state);
    
    const render_state_my = () => {
        setState_my({ var1_my: "hi" , var2_my: "he" });
    }
    return (
        <div onClick={render_state_my}>
            {state_my.var1_my} <br/>
            {state_my.var2_my}
        </div>
    );
}

export default Component_my;
