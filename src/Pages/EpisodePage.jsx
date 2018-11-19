import React, { Component } from "react";
import { getEpisode } from "../api";
import { PrevLink } from '../Components/PreviousPage/PrevPage.component'

class EpisodePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodeInfo: []
    };
  }

  componentDidMount = () => {
    getEpisode(this.props.match.params.id).then((episode) => { this.setState({ episodeInfo: episode }) })
  };

  render() {
    const episode = this.state.episodeInfo;
    return <div className="EpisodePage">
        <PrevLink to={"/Series/" + this.props.match.params.id}>
          {"<<< BACK <<<"}
        </PrevLink>
        <div className="InfoLayout">
          <div className="row mobile">
            <div className="column">
              <img src={episode.Poster} alt="" />
            </div>
            <div className="column">
              <h1 className="">{episode.Title}</h1>
              <div className="row">
                <h3>{episode.Runtime}</h3>
                <h3>|</h3>
                <h3>{episode.Year}</h3>
                <h3>|</h3>
                <h3>{episode.Genre}</h3>
                <h3>|</h3>
                <h3>{episode.imdbRating}</h3>
              </div>
              <p>{episode.Plot}</p>
              <div className="row bottom">
                <h3>{episode.Director}</h3>
              <h3>|</h3>
                <h3>{episode.Actors}</h3>
              <h3>|</h3>
                <h3>{episode.Released}</h3>
              <h3>|</h3>
                <h3>{episode.DVD}</h3>
              <h3>|</h3>
                <h3>{episode.BoxOffice}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default EpisodePage;
