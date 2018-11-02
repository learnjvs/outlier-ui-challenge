import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Launches from './views/Launches';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Launches}/>
      <Route path="/Launches" component={Launches}/>
    </div>
  </Router>
);

export default Routes;

/*

import Navigation from './components/Navigation

<Router>
  <div>
    <Navigation />
    <Route exact path="/" component={Launches}/>
    <Route path="/Launches" component={Launches}/>
  </div>
</Router>

make sure to import all components you want to route
make sure all links in the Navigation match the Routes in this file.


*/