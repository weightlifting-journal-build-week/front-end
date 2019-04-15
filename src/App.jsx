import React from 'react';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import {BrowserRouter as Router, Route} from "react-router-dom";


import Navbar from './components/Navbar';
import WorkoutsView from './views/WorkoutsView';

const App = () => {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Route 
            path='/login' 
            component={Login} 
          />
          <Route 
            path='/workouts' 
            component={WorkoutsView}
          />
      </div>
    </Router>
  );
}

export default App;
