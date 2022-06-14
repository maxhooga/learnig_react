import React, { useEffect, useState } from "react";
import ImagesFirstEnter from "./ImagesFirstEnter";
import Intrest from "./Intrest";

function AccountsIntrests() {

    const [state, setState] = useState(new Array);   

    const createList = () => {
        let copy =  JSON.parse(JSON.stringify(ImagesFirstEnter.intrests))
        copy.map((item, index) => {
               copy[index].isChoosed = false;
        })
        setState(copy);
    }

    useEffect(
        () => {
            createList();
        },[]
    )
    useEffect(
        () => {
            console.log(state);
        },[]
    )

    const choosedIntrest = (intrest) => {
        let pickedIndex = state.findIndex(obj => obj.name == intrest.name);
        let copy =  JSON.parse(JSON.stringify(state));
        copy[pickedIndex].isChoosed = !copy[pickedIndex].isChoosed;
        setState(copy);
        console.log(state);
    }

    return (
        <div className="container">
            <input />
            <div className="acountIntrests">
                { 
                    state.map((intrest, index) => {
                        return (
                            <div className="pickedIntrest">
                                <Intrest
                                    intrest={ intrest }
                                    key={ index }
                                    choosedIntrest={ choosedIntrest }
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default AccountsIntrests;
/*
display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
*/