import React, { Component } from 'react';

import './App.css';
import AddMovie from "./AddMovie"
import WatchList from "./WatchList";

import WatchedMovies from "./WatchedMovies";


class App extends Component {

  render() {
    return (
      <div className="App m-5">
        <header className="App-header">
          <h1 className="title">Movie Watch List</h1>
          <br />
          <br />

          <AddMovie />
        </header>
        <h2 className="bg-danger text-light"> Watchlist Movies </h2>

        <WatchList />
        <h2 className="bg-danger text-light"> Watched Movies </h2>
        <WatchedMovies />

      </div>
    );
  }
}

export default App;
