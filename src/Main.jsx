import React from 'react'
import { Switch, Route, BrowserRouter } from "react-router-dom";

// pages
import FirstPage from './Pages/FirstPage/FirstPage'
import MoviePage from './Pages/MoviePage/MoviePage'
import SeriesPage from './Pages/SeriesPage/SeriesPage'
import EpisodePage from "./Pages/SeriesPage/EpisodePage/EpisodePage";

const Main = () => (
  <main>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FirstPage}/>
        <Route exact path="/Movie/:id" component={MoviePage}/>
        <Route exact path="/Series/:id" component={SeriesPage}/>
        <Route exact path="/Series/:id/Season=:i/Episode=:e/:eid" component={EpisodePage}/>
      </Switch>
    </BrowserRouter>
  </main>
);

export default Main