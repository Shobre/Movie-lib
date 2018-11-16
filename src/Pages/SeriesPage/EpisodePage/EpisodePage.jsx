import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getEpisode } from "../../../../Components/api";

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
    return (
      <div>
        <Link
          style={{ alignSelf: "left", position: "relative", left: "-500px" }}
                to={"/Series/" + this.props.match.params.id}
        >
          {"<<< BACK <<<"}
        </Link>
        <h1>{episode.Title}</h1>
        <img src={episode.Poster} alt="" />
        <p>{episode.Plot}</p>
      </div>
    );
  }
}

export default EpisodePage;
