import React, { useEffect, useState } from "react";
import ImagesFirstEnter from "./ImagesFirstEnter";
import Intrest from "./Intrest";
import { ListStyle, AcountIntrests } from "./FirstEnter.style.js"

function AccountsIntrests() {

    const [state, setState] = useState(new Array);
    const [visible, setVisible] = useState(35);//temp ficha, using to decrease or to add images for testing purpose

    const createList = () => {
        const copy =  JSON.parse(JSON.stringify(ImagesFirstEnter.intrests)).map((item, index) => ({
            ...item,
            isChoosen: false,
            index: index,
            id: `${item.name} - ${Math.random()}`
        }))
        setState(copy);
    }

    useEffect(
        () => {
            createList();
        },[]
    )

    const choiceHandler = (choice) => {
        
        const pickedIndex = state.findIndex(obj => obj.id == choice.id);
        setState([
            ...state.slice(0, pickedIndex), 
            {...state[pickedIndex], 
            isChoosen: !state[pickedIndex].isChoosen}, 
            ...state.slice(pickedIndex+1)
        ]);
    }

    return (
        <ListStyle>
            <p>Choose your intrests</p>
            <AcountIntrests>
                { 
                    state.map((intrest, index) => {
                        return (
                            visible > index ? 
                            <Intrest
                                id={ intrest.id }
                                key={ intrest.id }
                                image={ intrest.image }
                                description={ intrest.description }
                                isChoosen={ intrest.isChoosen }
                                choiceHandler={ choiceHandler }
                            /> : null
                        )
                    })
                }
            </AcountIntrests>
        </ListStyle>
    );
}
export default AccountsIntrests;