import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovie } from '../../Components/api'

class MoviePage extends Component {
    constructor(props){
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
        return (
            <div>
                <Link style={{ alignSelf: 'left', position: "relative", left: "-500px"}} to={"/"}>{"<<< BACK <<<"}</Link>
                <h1>{movie.Title}</h1>
                <img src={movie.Poster} alt=""></img>
                <p>{movie.Plot}</p>
            </div>
        );
    }
}

export default MoviePage;