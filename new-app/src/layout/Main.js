import React from "react";
import Cards from "./Cards";
import Search from "./Search";
import PreLoader from "./PreLoader";

class Main extends React.Component {

    state = {
        isLoading: false,
        error: false,
        posters: [],
        erase: false
    }

    componentDidMount() {
        this.setState({isLoading: true})
        fetch("http://www.omdbapi.com/?apikey=2d71dc0a&s=dragon").then
        (respones => respones.json()).then
        (data => {
            let array = [];
            data.Search.map((unit, index) => {
                return(
                    array.push(unit)
                )
            })
            this.setState({isLoading: false, posters: array, error: false})
        }).catch(() => {
            this.setState({isLoading: false, error: true});
            console.log("Not a dog, cant fetch");
        })
    }

    searchHandler = (search) => {
        this.setState({isLoading: true})
        fetch(`http://www.omdbapi.com/?apikey=2d71dc0a&s=${search}`)
            .then(respones => respones.json())
            .then(data => {
                let array = [];
                data.Search.map((unit, index) => {
                    //console.log(unit)
                    return(
                        array.push(unit)
                    )
                })
                this.setState({isLoading: false, posters: array, error: false})
            })
            .catch(() => {
                this.setState({isLoading: false, error: true});
                console.log("Not a dog, cant fetch");
        })
    }
    componentDidUpdate() {
        console.log("update", this.state);
    }
    render(){
        return(
            <main className="container content">
                <Search searchHandler={ this.searchHandler } isLoading={ this.state.isLoading } />
                {this.state.isLoading && <PreLoader />}
                {!this.state.isLoading && (this.state.error ? <div> Congrats, you've found name no film uses. </div> : <Cards posters={this.state.posters} />)}
            </main>
        )
    }
}
export default Main