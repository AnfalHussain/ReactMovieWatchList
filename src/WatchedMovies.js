import React from "react";
import { connect } from 'react-redux'


// Components
import WatchedMovieCard from "./WatchedMovieCard";

function WatchedMovies(props) {
    //filter the  watched movies first 
    const watchedMoviesArray = props.movies.filter(movie => movie.done === true)
    const moviesRows = watchedMoviesArray.map(movie => (
        <WatchedMovieCard movie={movie} key={movie.title} />
    ));

    return (
        <table className="table">
            <thead>
                <tr className="headerRow">
                    <th>Search goes here </th>

                </tr>
            </thead>
            <tbody>{moviesRows}</tbody>
        </table>
    );
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}


export default connect(mapStateToProps)(WatchedMovies);