import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index.js'


export  class SearchBar extends Component {

    constructor(props) {
        super(props);


        this.state = {
            term: ''
        };
        //to bind the this word,, take the existeece function and bind it with this, and replace it
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onInputChange (event){
        this.setState({term:event.target.value})

    }
    onFormSubmit(event){
        event.preventDefault();
        //we need to get the weather data from here

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''})
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}className="input-group">
                <input
                    placeholder="Get a Five day Forcast in you favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                 />
                <span className="input-group-btn">

                    <button 
                    
                    type="submit" 
                    className="btn btn-secondary"
                    
                    >Submit </button>
                </span>
            </form>
        )
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}
//null bcz we don't care about state for this container
export default connect(null,mapDispatchToProps)(SearchBar);