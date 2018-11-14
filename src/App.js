import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY + "&";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      movies: [],
      movieInfo: [],
      movieImg: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getByTitle = API_URL + `t=${this.state.movie}&plot=full`;
  }

  handleChange(event) {
    this.setState({ movie: event.target.value });
  }

  handleSubmit(event) {
    this.getMovie();
    console.log(this.state.movie)
    event.preventDefault();
  }

  getMovie = () => {
      fetch(API_URL + `s=${this.state.movie}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.Search);
        const updatedMovies = this.state.movies;
        updatedMovies.push(data.Search);
        this.setState({ movies: updatedMovies, movieInfo: data.Search });
        console.log(this.state.movies);
      });
  }


  addResults = () => {
    let _results = []
    for (let i = 0; i < this.state.movieInfo.length; i++) {
      console.log(i + this.state.movieInfo[i])
    }
    _results = this.state.movieInfo.map((movie, i) => {
      console.log(movie)
      return <div key={i}>
        <h1>{movie.Title}</h1>
        <img src={movie.Poster}></img>
        <p>{movie.imdbID}</p>
      </div>
    })
    return _results
  }
  
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

      <form onSubmit={this.handleSubmit}>
        <label>
          Search title:
          <input type="text" value={this.state.movie} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        {this.addResults()}
      </div>;
  }
}

export default App;
