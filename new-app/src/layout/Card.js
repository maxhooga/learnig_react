import React from 'react'

const Card = (props) => {
    return(
        <>
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img src={props.poster} />
                {/*<img class="activator" src="images/office.jpg"></img>*/}
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{ props.title }<i className="material-icons right">{ props.year }</i></span>
            </div>
        </div>
        </>
    )
}

export default Card