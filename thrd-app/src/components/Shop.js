import React, { useEffect, useContext, useState } from "react";
import { API_URL, API_KEY } from "../config";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import CartContent from "./CartContent";

const Shop = () => {

    const [goods, setGoods] = useState([]);

    const [newCartContent, setNewCartContent] = useState('');
    useEffect(
        function getGoods(){
            fetch(API_URL, {
                headers: {Authorization : "b4fe1fbf-f85b5c26-d508bda3-2829e359"}
            })
            .then((response) => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured)
            })
        },[]
    );


    return(
        <main className="container content">
            <CartContent />
            <Cart />
            <GoodsList goods={ goods }/>
        </main>
    )
}
export default Shop