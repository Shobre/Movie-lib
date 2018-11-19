import React, { Component } from 'react';
import './SearchResults.css'
import { SearchWrapper } from '../HOC';
import { Thumbnail } from '../Thumbnails/Thumbnail.component'

class SearchResults extends Component{

    addResults = () => {
        let _results = [];
        try {
            _results = this.props.movieInfo.map((movie, i) => {
                return (<Thumbnail 
                            key={i} 
                            to={movie.Type + "/" + movie.imdbID}
                            Title={movie.Title}
                            Url={movie.Poster}
                            Year={movie.Year}
                            Type={movie.Type}
                        />
                );
            });
        } catch (error) {
            console.log(error);
            return <h1>No results...</h1>;
        }

        return _results;
    };
    
    render() {
        console.log(this.props.movieInfo)
        return <div className="SearchResults">{this.addResults()}</div>
    }
}

const WrappedResults = SearchWrapper(SearchResults)

export default WrappedResults