import React from 'react';

// import Login from './components/Login';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './views/Home';
import NewWorkout from './views/NewWorkout';
import Login from './views/Login.js';

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
                    exact
                    path='/'
                    component={Home}
                />
                <Route
                    exact path='/new'
                    component={NewWorkout}
                />
            </div>
        </Router>
    );
}

export default App;
