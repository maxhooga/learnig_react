import React from 'react'

class ControleInputClass extends React.Component {

    state = {
        value: ""
    }
    
    changeHandler = (e) => {
        let xxl = e.target.value;
        this.setState({value: xxl}, () => {console.log(this.state.value)});//гарантированно запускает консоль после изменения state => callback
    }
    componentDidMount() {console.log("didmount")}//сигнал что компонент закончил рождаться. Программист может делать свой запрос/делать то что хочет
    componentDidUpdate() {console.log("didupdate")}
    render() {
        console.log("render")
        return(
            <input type="text" onChange={ this.changeHandler } value={this.state.value}/>
        );
    }
}


export default ControleInputClass

//this.setState({value: xxl}, () => {console.log(this.state.value)});//гарантированно запускает консоль после изменения state => callback