import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LyricsState from './context/LyricsState';


// Comp
import NavBar from './comonents/layout/NavBar';
import Home from './comonents/layout/Home';
import Lyrics from './comonents/tracks/Lyrics';
import NotFound from './comonents/layout/NotFound';

import './App.css';

function App() {
  return (
    <LyricsState>
      <Router>
        <Fragment>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/lyrics/track/:id' component={Lyrics} />
              <Route component={NotFound} />
            </Switch>

          </div>

        </Fragment>
      </Router>
    </LyricsState>
  );
}

export default App;
