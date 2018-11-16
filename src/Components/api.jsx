const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = "http://www.omdbapi.com/?apikey=" + API_KEY + "&";

export const searchMovies = ( movie ) => {
    return fetch(API_URL + `type=movie&s=${movie}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.Search)
            return data.Search
        })
        .catch(e => {
            console.log(e)
            return null
        })
}

export const searchSeries = ( series ) => {
    return fetch(API_URL + `type=series&s=${series}`)
        .then(resp => resp.json())
        .then(data => {
        console.log(data.Search);
        return data.Search;
        })
        .catch(e => {
            console.log(e)
            return null
        });
}

export const getMovie = ( id ) => {
    return fetch(API_URL + `type=movie&i=${id}&plot=full`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            return data
        }).catch(e => {
            console.log(e)
            return null
        });
}

export const getSeries = ( id ) => {
    return (fetch(API_URL + `type=series&i=${id}&plot=full`))
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            return data
        })
        .catch(e => {
            console.log(e)
            return null
        });
}

export const getSeason = ( id, season ) => {
    return fetch(API_URL + `type=series&i=${id}&Season=${season}&plot=full`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            return data
        }).catch(e => {console.log(e)
        return null});
}

export const getEpisode = ( id ) => {
    return fetch(API_URL + `type=episode&i=${id}&plot=full`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            return data
        }).catch(e => {console.log(e)
        return null});
}
