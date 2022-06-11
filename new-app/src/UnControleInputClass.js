import React from "react";

class UnControleInputClass extends React.Component {

    exampleRef = React.createRef();
    clickHandler = (e) => {
        console.log(this.exampleRef.current.value)
    }

    render() {

        return(
            <div>
                <input 
                    type="text"
                    ref={ this.exampleRef }
                />
                <button onClick={ this.clickHandler }>press me</button>
            </div>
                
        )
    }
}

export default UnControleInputClass