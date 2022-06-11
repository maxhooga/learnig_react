import React, { useReducer, useContext } from 'react'
import Context from './Context'

const initialState = {
  num: 0
}
const reducer = (counter, action) => {
  if(action.type === "ADD"){
    return{
      ...counter,
      num: counter.num+1
    }
  }
  if(action.type === "SUB"){
    return{
      ...counter,
      num: counter.num-1
    }
  }
}
function Reduser() {
  
  const [counter, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="container row">
      <div className="col s1">{ counter.num }</div>
      <a 
        className="btn-floating btn-large waves-effect waves-light red" 
        onClick={ () => dispatch({type: "ADD"}) }
        >
          <i
            className="material-icons"
          >add</i>
      </a>

      <a 
        className="btn-floating btn-large waves-effect waves-light red" 
        onClick={ () => dispatch({type: "SUB"}) }
        >
          <i
            className="material-icons"
          >sub</i>
      </a>
    </div>
  );
}

export default Reduser;