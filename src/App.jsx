import React from 'react';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import WorkoutsView from './views/WorkoutsView';
import WorkoutForm from './views/WorkoutForm';

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
                <Route
                    exact
                    path='/'
                    component={WorkoutsView}
                />
                <Route
                    path='/new'
                    component={WorkoutForm}
                />
            </div>
        </Router>
    );
}

export default App;
