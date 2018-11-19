import React, { Component } from 'react'
import Season from '../Components/Season/Season.component'
import {Results} from '../Components/ResultContainer/Results.component'
import { getSeries, getSeason } from '../api';
import { PrevLink } from '../Components/PreviousPage/PrevPage.component'

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
        return <div className="SeriesPage">
            <PrevLink to={"/"} prevPage={this.props.location.pathname}>
                {"<<< BACK <<<"}
            </PrevLink>
            <div className="InfoLayout">
                <div className="row">
                    <div className="column">
                        <img src={series.Poster} alt="" />
                    </div>
                    <div className="column">
                        <h1 className="">{series.Title}</h1>
                        <div className="row">
                            <h3>{series.Runtime}</h3>
                            <h3>|</h3>
                            <h3>{series.Year}</h3>
                            <h3>|</h3>
                            <h3>{series.Genre}</h3>
                            <h3>|</h3>
                            <h3>{series.imdbRating}</h3>
                        </div>
                        <p>{series.Plot}</p>
                        <div className="row bottom">
                            <h3>{series.Director}</h3>
                            <h3>{series.Actors}</h3>
                            <h3>{series.Released}</h3>
                            <h3>{series.DVD}</h3>
                            <h3>{series.BoxOffice}</h3>
                        </div>
                    </div>
                </div>
            </div>
            {this.createSeasonLink()}
            <Results>
              {this.showSeason()}
            </Results>
          </div>;
    }
}

export default SeriesPage;