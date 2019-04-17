import React from 'react';

import Login from './components/Login';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from './components/Navbar';
import WorkoutsView from './views/WorkoutsView';
import WorkoutForm from './views/WorkoutForm';
import MaterialUILogin from './components/MaterialUILogin.js';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Route
                    path='/login'
                    component={MaterialUILogin}
                />
                <Route
                    path='/workouts'
                    component={WorkoutsView}
                />
                <Route
                    exact path='/new'
                    component={WorkoutForm}
                />
            </div>
        </Router>
    );
}

export default App;
