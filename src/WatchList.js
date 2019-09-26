import React, { Component } from "react";
import { connect } from 'react-redux'


// Components
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";


class WatchList extends Component {
    state = {
        filteredMovies: this.props.movies.filter(movie => movie.done === false),
        searchIsUsed: false
    };

    componentDidUpdate(prevProps) {
        if (prevProps.movies !== this.props.movies) {
            let temp = this.props.movies.filter(movie => movie.done === false)
            this.setState({ filteredMovies: temp })
        }
    }

    filterMovies = query => {
        query = query.toLowerCase();
        const watchlistMovies = this.props.movies.filter(movie => movie.done === false)

        let filteredMovies = watchlistMovies.filter(movie => {
            return `${movie.title}`
                .toLowerCase()
                .includes(query);
        });
        this.setState({
            filteredMovies: filteredMovies, searchIsUsed: true

        });
    };


    selectShowView = () => {
        if (this.state.searchIsUsed) {
            return (
                <h5> Showing {this.state.filteredMovies.length} out of  {this.props.movies.filter(movie => movie.done === false).length} movies  </h5>

            );

        } else {
            return (
                <h5> Showing {this.props.movies.filter(movie => movie.done === false).length} movies  </h5>
            );
        }
    };

    selectResultView = () => {
        const moviesRows = this.state.filteredMovies.map(movie => (
            <MovieCard movie={movie} key={movie.title} />
        ));
        if (this.state.filteredMovies.length === 0) {
            return (
                <h5> No results found!! </h5>

            );

        } else {
            return (
                <tbody>{moviesRows}</tbody>

            );
        }
    };
    render() {




        return (
            <>
                {/* calling select view here */}
                <div>
                    {this.selectShowView()}
                </div>

                <SearchBar changeHandler={this.filterMovies} ></SearchBar>
                <table className="table">

                    {this.selectResultView()}
                </table>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}


export default connect(mapStateToProps)(WatchList);