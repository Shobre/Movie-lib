import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Season from '../../Components/Season/Season.component'
import Results from '../../Components/ResultContainer/Results.component'
import { getSeries, getSeason } from '../../Components/api';

class SeriesPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seriesInfo: [],
            selectedSeason: 1,
            seasonInfo: [],
            episodes: [],
        };
        this.selectSeason = this.selectSeason.bind(this);
    }

    componentDidMount = () => {
        getSeries(this.props.match.params.id).then((series) => { this.setState({ seriesInfo: series }) })
        getSeason(this.props.match.params.id, this.state.selectedSeason).then( series => {
            this.setState({ seasonInfo: series, episodes: series.Episodes })
        });
    }

    selectSeason(e) {
        getSeason(this.props.match.params.id, e.target.value).then(series => {
            this.setState({episodes: series.Episodes})
        })
        this.setState({ selectedSeason: e.target.value })
    }

    createSeasonLink = () => {
        let _seasonLinks = []
        for (let i = 0; i < this.state.seriesInfo.totalSeasons; i++) {
            _seasonLinks.push(<button key={i} value={i+1} onClick={this.selectSeason} style={{ margin: 10 }}>
                {i+1}
              </button>);
        }
        return _seasonLinks
    }

    showSeason = () => {
        return <div>
            <h1>Season {this.state.selectedSeason}</h1>
            <Season id={this.props.match.params.id} i={this.state.selectedSeason} episodes={this.state.episodes}/>
          </div>;
    }

    render() {
        const series = this.state.seriesInfo;
        return <div>
            <Link style={{ alignSelf: "left", position: "relative", left: "-500px" }} to={"/"}>
              {"<<< BACK <<<"}
            </Link>
            <h1>{series.Title}</h1>
            <img src={series.Poster} alt="" />
            <p>{series.Plot}</p>
            {this.createSeasonLink()}
            <Results>
              {this.showSeason()}
            </Results>
          </div>;
    }
}

export default SeriesPage;