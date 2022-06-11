import React, { useContext } from 'react'
import { Context } from './Context'


const Button = (props) => {
    const [context, setContext] = useContext(Context)

    const clickHandler = (num) => {
        setContext({...context, value: context.value.concat(num)})
    }

    return (
        <div>
            <a 
                className="btn-floating btn-large waves-effect waves-light red"
                onClick={ (e) => { clickHandler(props.num) }  }
                >{props.num}</a>
        </div>
    );
}

export default Button







