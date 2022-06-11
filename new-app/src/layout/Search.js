import React from "react";

class Search extends React.Component {
    state = {
        search: '',
        localLoading: false
    }
    clearState = () => {
        this.setState({search: ''});
    }
    loadingHandler = () => {
        this.setState({localLoading: true, search: ''})
    }
    
    //this.props.isLoading && this.clearState() }
    render(){

        return(
            <>
                
                <div className="input-field">
                    <input 
                        placeholder="Placeholder" 
                        id="first_name" 
                        type="text" 
                        className="validate"
                        value={ this.state.search }
                        onChange={ (e) => {this.setState({search: e.target.value})} }
                    />
                    <button onClick={
                        () => {
                            this.props.searchHandler(this.state.search)
                        }
                    } className={ this.props.isLoading ? "btn search-btn disabled" : "btn search-btn" }>search</button>
                </div>
            </>
        ) 
    }
    
}

export default Search