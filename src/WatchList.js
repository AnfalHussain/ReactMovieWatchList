import React from "react";
import { connect } from 'react-redux'


// Components
import MovieCard from "./MovieCard";

function WatchList(props) {
    //filter the movies first 
    const watchListMoviesArray = props.movies.filter(movie => movie.done === false)
    const moviesRows = watchListMoviesArray.map(movie => (
        <MovieCard movie={movie} key={movie.title} />
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


export default connect(mapStateToProps)(WatchList);