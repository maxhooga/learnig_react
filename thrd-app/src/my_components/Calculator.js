import React, { useContext } from 'react'
import { Context } from './Context'
import Button from "./Button";
import EvaluationInput from "./EvaluationInput";


const Calculator = () => {
    const [context, setContext] = useContext(Context)
    
    const changeHandler = (e) => {
        setContext({...context, value: e.target.value})
    }
    const clickHandler = () => {
        
        console.log(eval(context.value))
    }
    return (
        <div>
            <EvaluationInput changeHandler={ changeHandler } />
            <button onClick={ clickHandler }>eval</button> 
            <div className='numpud'>
                <Button num={ 0 } />
                <Button num={ 1 } />
                <Button num={ 2 } />
                <Button num={ 3 } />
                <Button num={ 4 } />
                <Button num={ 5 } />
                <Button num={ 6 } />
                <Button num={ 7 } />
                <Button num={ 8 } />
                <Button num={ 9 } />
                <Button num={ '+' } />
                <Button num={ '-' } />
                <Button num={ '*' } />
                <Button num={ '/' } />
            </div>
        </div>
    );
}

export default Calculator