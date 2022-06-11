import React, { useContext } from 'react'
import { Context } from './Context'

const EvaluationInput = (props) => {
    
    const [context, setContext] = useContext(Context)

    return (
        <div>
            <input 
                type="text"
                onChange={ props.changeHandler }
                value={ context.value }
            />
        </div>
    );
}

export default EvaluationInput