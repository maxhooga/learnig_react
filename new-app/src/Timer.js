import React from 'react'

class Timer extends React.Component {

    state = {
        time: 0
    }
    componentWillUnmount() {
        console.log("i am alive");
        clearInterval(this.counterId);
        this.setState({time: 0});
    }
    componentDidMount() {
        let temp = localStorage.getItem("counter");
        console.log("mount", temp)
    }
    componentDidUpdate() {
        localStorage.setItem("counter", this.state.time);
        let temp = localStorage.getItem("counter");
        console.log(temp)
    }
    startHandler = () => {
        this.counterId = setInterval(() => {this.setState({time: this.state.time+1})}, 1000);
    }
    stopHandler = () => {
        clearInterval(this.counterId)
    }
    resetHandler = () => {
        clearInterval(this.counterId);
        this.setState({time: 0});
    }

    render() {
        
        return(
            <div>
                <h1>Timer</h1>
                <div>{this.state.time}</div>
                <button onClick={ this.startHandler } className="waves-effect waves-light btn timerBtn">start</button>
                <button onClick={ this.stopHandler } className="btn-floating btn-large waves-effect waves-light red timerBtn">stop</button>
                <button onClick={ this.resetHandler } className="btn waves-effect waves-light timerBtn">reset</button>
            </div>
        );
    }
}


export default Timer

//localStorage.setItem("num", 5);
//arg = localStorage.getItem("num");