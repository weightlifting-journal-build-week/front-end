import React from 'react';

import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import WorkoutHistory from './views/WorkoutHistory';
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
                    path='/workouts'
                    component={WorkoutHistory}
                />
                <Route
                    exact
                    path='/'
                    component={WorkoutHistory}
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
