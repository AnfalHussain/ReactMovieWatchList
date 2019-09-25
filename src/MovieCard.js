import React from "react";
import { connect } from 'react-redux'


import "./App.css";

// Actions

import { watchMovie } from "./redux/actions";
import { deleteMovie } from "./redux/actions";

function MovieCard(props) {

    const movie = props.movie;

    return (
        <tr className="row">
            <td>{movie.title}</td>

            <td onClick={() => props.watchMovie(movie)}>
                <button className="rounded-pill btn-primary" >
                    Watched
                </button>
            </td>
            <td onClick={() => props.deleteMovie(movie)}>
                <button className="rounded-pill btn-danger" >
                    Delete
                 </button>
            </td>
            <hr />
        </tr>
    );
}


const mapDispatchToProps = dispatch => {
    return {
        watchMovie: movie => dispatch(watchMovie(movie)),
        deleteMovie: movie => dispatch(deleteMovie(movie))
    }
}


export default connect(null, mapDispatchToProps)(MovieCard);
