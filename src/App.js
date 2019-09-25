import React, { Component } from 'react';

import './App.css';
import AddMovie from "./AddMovie"
import WatchList from "./WatchList";

import WatchedMovies from "./WatchedMovies";


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title">Movie Watch List</h1>
          <br />
          <br />

          <AddMovie />
        </header>

        <WatchList />
        <h2> Watched Movies </h2>
        <WatchedMovies />

      </div>
    );
  }
}

export default App;
