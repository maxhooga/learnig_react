import React, { useEffect } from "react";
import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {

    return(
        <div className="goods">
            {props.goods.map((unit, index) => {
                return(
                    <GoodsItem { ...unit } key={ unit.id } index={ index }/>
                )
            })}
        </div>
    )
}
export default GoodsList