import React from "react"
import Card from "./Card"

const Cards = (props) => {
    return(
        <div className="posters">
            { props.posters.map((poster, index) => {
                return(
                    <Card key={ index } title={ poster.Title} poster={ poster.Poster } year={ poster.Year } />
                )
            }) }
        </div>
    )
}

export default Cards