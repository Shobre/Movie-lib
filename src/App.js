import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const API_KEY = "ee7eedf5";
const API_URL = "http://www.omdbapi.com/?";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
      movies: [],
      movieInfo: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getByTitle = API_URL + `t=${this.state.movie}&plot=full&apikey=${API_KEY}`;
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
    fetch(API_URL + `t=${this.state.movie}&plot=full&apikey=${API_KEY}`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        const updatedMovies = this.state.movies;
        updatedMovies.push(data);
        this.setState({ movies: updatedMovies, movieInfo: data });
        console.log(this.state.movies);
      });
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
      
        <h1>{this.state.movieInfo.Title}</h1>
        <p>{this.state.movieInfo.Plot}</p>
      </div>;
  }
}

export default App;
