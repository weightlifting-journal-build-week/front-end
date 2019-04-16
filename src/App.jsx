import React from 'react';

import Login from './components/Login';
import {BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from './components/Navbar';
import WorkoutsView from './views/WorkoutsView';

const App = props => {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Route 
            path='/login' 
            component={Login} 
          />
          <Route 
            path='/protected' 
            component={WorkoutsView}
          />
      </div>
    </Router>
  );
}

export default App;
