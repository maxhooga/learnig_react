import React, { useEffect, useState } from "react";
import ImagesFirstEnter from "./ImagesFirstEnter";
import Intrest from "./Intrest";

function AccountsIntrests() {

    const [state, setState] = useState(new Array);
    const [visible, setVisible] = useState(35);//temp ficha, using to decrease or to add images for testing purpose

    const createList = () => {
        const copy =  JSON.parse(JSON.stringify(ImagesFirstEnter.intrests)).map((item, index) => ({
            ...item,
            isChoosed: false,
            index: index
        }))
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
        },[state]
    )

    const choosedIntrest = (intrest) => {
        const pickedIndex = state.findIndex(obj => obj.index == intrest.index);
        const copy =  JSON.parse(JSON.stringify(state));
        copy[pickedIndex].isChoosed = !copy[pickedIndex].isChoosed;
        setState(copy);
    }

    return (
        <div className="container">
            <p>Choose your intrests</p>
            <div className="acountIntrests">
                { 
                    state.map((intrest, index) => {
                        return (
                            visible > index ? 
                            <Intrest
                                intrest={ intrest }
                                key={ index }
                                choosedIntrest={ choosedIntrest }
                            /> : ""
                        )
                    })
                }
            </div>
        </div>
    );
}
export default AccountsIntrests;