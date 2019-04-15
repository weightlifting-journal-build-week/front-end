import React, { Component } from 'react';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import { Route } from "react-router-dom";


import Navbar from './components/Navbar';
import NewWorkout from './components/NewWorkout';
import WorkoutHistoryCard from './components/WorkoutHistoryCard';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Weight Lifting Journal</h1>
                <Navbar />
                <Route path='/login' component={Login} />
                <PrivateRoute exact path='/protected' />
                <NewWorkout />
                <WorkoutHistoryCard />
            </div>
        );
    }
}

export default App;
