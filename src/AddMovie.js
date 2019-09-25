import React, { Component } from "react";
import { connect } from 'react-redux'


import "./App.css";

// Actions
import { addMovie } from "./redux/actions";


class AddMovie extends Component {
    state = {
        input: ""
    };

    handleChange = event => {
        this.setState({
            ipnut: event.target.value
        });

        // this.props.AddMovie(this.state.ipnut)
        // this.props.onChange(event.target.value);

    };

    // addMovieOnClick = title => {

    //     this.props.AddMovie(title)
    // };



    // add text field 
    render() {

        // const item = props.item;
        return (
            <div>
                <input
                    className="mx-auto rounded-pill text-center"
                    placeholder="Add Movie.."
                    value={this.state.value}
                    onChange={this.handleChange}
                    type="text"
                />

                <button className="rounded-pill btn-danger" onClick={() => this.props.addMovie(this.state.ipnut)} >
                    {console.log(this.state.ipnut)}
                    + Add
                            </button>
            </div>


        )

    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMovie: movie => dispatch(addMovie(movie)),
    }
}


export default connect(null, mapDispatchToProps)(AddMovie);