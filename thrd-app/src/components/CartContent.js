import React, { useEffect, useState, useContext } from "react";
import { Context } from "../ContextReducer/ContextReducer";


function CartContent() {
    const [state, dispatch] = useContext(Context);
    const [content, setContent] = useState(new Array);
    let copyContent;
    let xxl = new Array;
    useEffect(
        () => {
            //console.log("it is items", state.items)     
            copyContent = JSON.parse(JSON.stringify(state.items));
            //setContent(copyContent)

            //setContent(copyContent.sort((a, b) => a.id > b.id))
            setContent(copyContent.sort((a, b) => toString(a.id) > toString(b.id)))//sorting array
            setContent(copyContent.filter((element, index, array) => array
                .map(object => object.id)
                .indexOf(element.id) === index))
            setContent(() => {
                let array = new Array;
                console.log("this is array", copyContent.length);
                for(let i = 0; i<content.length; i++){
                }
                
                return array
            })

            /*setContent(copyContent.sort((a, b) => a.id > b.id))//sorting array
            setContent(copyContent.filter((element, index, array) => array
                .map(object => object.id)
                .indexOf(element.id) === index))//delete duplicates
*/
            
        },[state.isVisible]
    )
    return(
        <div>
           { //console.log("this is content", content)
           content.map((element, index) => {
               console.log(element)
               return(
                    <div key={element.id}>
                        {element.id}
                    </div>
                )
           })}
        </div>
    )
}
export default CartContent