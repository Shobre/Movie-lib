import React, { Component } from "react";
import { Link } from "react-router-dom";

class Season extends Component {
  createEpisodeList = () => {
      let _episodeList = []
      try {
          _episodeList = this.props.episodes.map((episode, i) => {
              return <Link key={i} to={"/Series/" + this.props.id + "/Season=" + this.props.i + "/Episode=" + i + "/" + episode.imdbID}>
                  <div className="">
                      <h1>{episode.Title}</h1>
                  </div>
              </Link>;
          })
      } catch (error) {
          console.log(error)
          return <div>No episodes...</div>
      }
      return _episodeList;
  }

  render() {
    return (this.createEpisodeList()
    );
  }
}

export default Season;
