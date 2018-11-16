import React, { Component } from "react";
import { Button, Toggle } from "../../Components/Button/Button.component";
import { Input } from "../../Components/Input/Input.component";
import Results from "../../Components/ResultContainer/Results.component";
import { Thumbnail } from "../../Components/Thumbnails/Thumbnail.component";
import { Link } from "react-router-dom";
import { searchMovies, searchSeries } from '../../Components/api'

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      toggle: true,
      movieInfo: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Toggle = this.Toggle.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    this.state.toggle ? this.getMovies() : this.getSeries();
    event.preventDefault();
  }

  Toggle() {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }

  getMovies = () => {
    searchMovies(this.state.input).then((movie) => { this.setState({ movieInfo: movie} )})
  };

  getSeries = () => {
    searchSeries(this.state.input).then((series) => { this.setState({ movieInfo: series }) })
  };

  addResults = () => {
    let _results = [];
    try {
      _results = this.state.movieInfo.map((movie, i) => {
        return (
          <Link key={i} to={movie.Type + "/" + movie.imdbID}>
            <Thumbnail
              Title={movie.Title}
              Url={movie.Poster}
              Id={movie.imdbID}
              Type={movie.Type}
            />
          </Link>
        );
      });
    } catch (error) {
      console.log(error);
      return <h1>No results...</h1>;
    }

    return _results;
  };

  render() {
    return (
      <div className="App">
        <Toggle
          text={this.state.toggle ? "Movies" : "Series"}
          onClick={this.Toggle}
          toggle={this.state.toggle ? "Movies" : "Series"}
        />
        <Input onChange={this.handleChange} />
        <Button text="Search" onClick={this.handleSubmit} />
        <Results>{this.addResults()}</Results>
      </div>
    );
  }
}

export default FirstPage;
