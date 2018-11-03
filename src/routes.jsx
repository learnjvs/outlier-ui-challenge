import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Launches from './views/Launches';
import Navigation from './components/Navigation';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Launches}/>
      <Route path="/launches" component={Launches}/>
    </div>
  </Router>
);

export default Routes;

/*

import Navigation from './components/Navigation
import rocket component
make sure all links in the Navigation component have a corresponding <Route>

<Router>
  <div>
    <Navigation />
    <Route exact path="/" component={Launches}/>
    <Route path="/launches" component={Launches}/>
    <Route path="/rockets" component=Rockets/>
  </div>
</Router>



*/