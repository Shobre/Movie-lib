import React, { Component } from 'react';
import { getMovie } from '../api'
import { PrevLink } from '../Components/PreviousPage/PrevPage.component';
import './Pages.css'

class MoviePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieInfo: []
    }
  }

  componentDidMount = () => {
    getMovie(this.props.match.params.id).then(movie => {
      this.setState({ movieInfo: movie });
    });
  }

  render() {
    const movie = this.state.movieInfo;
    console.log(this.props.location.pathname)
    return <div className="MoviePage">
        <PrevLink to={"/"} prevPage={this.props.location.pathname}>
          {"<<< BACK <<<"}
        </PrevLink>
        <div className="InfoLayout">
          <div className="row mobile">
            <div className="column">
              <img src={movie.Poster} alt="" />
            </div>
            <div className="column">
              <h1 className="">{movie.Title}</h1>
              <div className="row">
                <h3>{movie.Runtime}</h3>
                <h3>|</h3>
                <h3>{movie.Year}</h3>
                <h3>|</h3>
                <h3>{movie.Genre}</h3>
                <h3>|</h3>
                <h3>{movie.imdbRating}</h3>
              </div>
              <p>{movie.Plot}</p>
              <div className="row bottom">
                <h3>{movie.Director}</h3>
                <h3>|</h3>
                <h3>{movie.Actors}</h3>
              <h3>|</h3>
                <h3>{movie.Released}</h3>
              <h3>|</h3>
                <h3>{movie.DVD}</h3>
              <h3>|</h3>
                <h3>{movie.BoxOffice}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default MoviePage;