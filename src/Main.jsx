import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom";

// pages
import FirstPage from './Pages/FirstPage'
import MoviePage from './Pages/MoviePage'
import SeriesPage from './Pages/SeriesPage'
import EpisodePage from './Pages/EpisodePage'

const Main = ( {movieInfo, pageNum, totalRes, changePage} ) => {
  return <main className="Main blackBg">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(props) => <FirstPage {...props} movieInfo={movieInfo} pageNum={pageNum} totalRes={totalRes} changePage={changePage}/>} />
        <Route exact path="/Movie/:id" component={MoviePage}/>
        <Route exact path="/Series/:id" component={SeriesPage}/>
        <Route exact path="/Series/:id/Season=:i/Episode=:e/:eid" component={EpisodePage}/>
      </Switch>
    </BrowserRouter>
  </main>
};

export default Main