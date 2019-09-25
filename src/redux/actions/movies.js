import { ADD_MOVIE, DELETE_MOVIE, WATCH_MOVIE, UNWATCH_MOVIE } from "./actionTypes"


export const addMovie = movie => {
    return {
        type: ADD_MOVIE,
        payload: movie
    }
}

export const deleteMovie = movie => {
    return {
        type: DELETE_MOVIE,
        payload: movie
    }
}

export const watchMovie = movie => {
    return {
        type: WATCH_MOVIE,
        payload: movie
    }
}

export const unwatchMovie = movie => {
    return {
        type: UNWATCH_MOVIE,
        payload: movie
    }
}


