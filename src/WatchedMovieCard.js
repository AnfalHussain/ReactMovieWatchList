import React from "react";
import { connect } from 'react-redux'


import "./App.css";

// Actions

import { unwatchMovie } from "./redux/actions";
import { deleteMovie } from "./redux/actions";

function WatchedMovieCard(props) {

    const movie = props.movie;

    return (
        <tr className="row">
            <td>{movie.title}</td>

            <td onClick={() => props.unwatchMovie(movie)}>
                <button className="rounded-pill btn-secondary" >
                    Unwatch
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
        unwatchMovie: movie => dispatch(unwatchMovie(movie)),
        deleteMovie: movie => dispatch(deleteMovie(movie))
    }
}


export default connect(null, mapDispatchToProps)(WatchedMovieCard);
