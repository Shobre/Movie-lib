import React, { Component } from 'react';
import './App.css';
import Main from './Main'
import WrappedSearch from './Components/Search/Search.component'
import { searchMovies, searchSeries } from './api'
import Dropdown from "react-dropdown";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      toggle: true,
      movieInfo: [],
      totalRes: "",
      pageNum: "1",
      type: "Movies",
      selected: "Movies",
      typeList: ["Movies","Series"]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.Toggle = this.Toggle.bind(this);
    this.switchPage = this.switchPage.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this._onSelect = this._onSelect.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  _onSelect(option) {
    console.log('You selected ', option.label)
    this.setState({ selected: option })
    console.log(this.state.selected)
  }

  

  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleSubmit(event);
    }
  }

  handleChange(event) {
    console.log(event);
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    console.log(event);
    this.state.selected === "Movies"
      ? this.getMovies(this.state.input, this.state.pageNum)
      : this.getSeries(this.state.input, this.state.pageNum);
    event.preventDefault();
  }

  Toggle() {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
      type: this.state.toggle ? "Series" : "Movies"
    }));
  }

  handleSelect(event) {
    console.log(event)
  }

  getMovies = (movie, pageNum) => {
    searchMovies(movie, pageNum).then(movie => {
      this.setState({ movieInfo: movie.Search, totalRes: movie.totalResults });
    });
  };

  getSeries = (series, pageNum) => {
    searchSeries(series, pageNum).then(series => {
      this.setState({
        movieInfo: series.Search,
        totalRes: series.totalResults
      });
    });
  };

  switchPage(event) {
    this.getMovies(this.state.input, event.target.value);
    this.setState({ pageNum: event.target.value });
  }

  render() {
    return <div className="App">
        <header className="App-header greyBg">
          <Dropdown options={this.state.typeList} onChange={this._onSelect} value={this.state.typeList[0]} placeholder="Select an option" />
          <WrappedSearch onClick={this.handleSubmit} onChange={this.handleChange}/>
        </header>
        <Main className="blackBg" pageNum={this.state.pageNum} movieInfo={this.state.movieInfo} totalRes={this.state.totalRes} changePage={this.switchPage} />
        <footer className="greyBg" />
      </div>;
  }
}

export default App;
