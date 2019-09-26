import { ADD_MOVIE, DELETE_MOVIE, WATCH_MOVIE, UNWATCH_MOVIE } from '../actions/actionTypes';

// Data
import movies from '../../data';

const initialState = {
    movies: movies
}

export default (state = initialState, action) => {
    switch (action.type) {

        case ADD_MOVIE:
            const movieTitleToAdd = action.payload;

            const movieToAdd = {
                title: movieTitleToAdd,
                done: false, //initially all movies must be added to the watchlist


            }
            return {
                ...state,
                movies: state.movies.concat(movieToAdd), // adding the new movie to the movies array
            }

        case WATCH_MOVIE:
            const movieToSetToWatched = action.payload;
            return {
                ...state,
                movies: [...state.movies.map(movie => movie !== movieToSetToWatched ? movie : { ...movie, done: true })]

            }


        case UNWATCH_MOVIE:
            const movieToSetToUnwatched = action.payload;
            return {
                ...state,
                movies: [...state.movies.map(movie => movie !== movieToSetToUnwatched ? movie : { ...movie, done: false }
                )]
            }

        case DELETE_MOVIE:
            const movieToDelete = action.payload;
            return {
                ...state,
                movies: state.movies.filter(movie => movie !== movieToDelete)
            }

        default:
            return state
    }
}