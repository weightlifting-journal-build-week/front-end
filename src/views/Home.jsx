import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import NewWorkoutButton from '../components/Buttons/NewWorkoutButton';
import WorkoutList from '../components/WorkoutList';
import { getWorkouts, getExercises } from '../redux/actions';

class Home extends Component {
    state = {
        user: '',
    }

    componentDidMount() {
        this.props.getWorkouts(1);
    }
    render() {
        return (
            <div className="workouts-view">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <a href="/new">
                        <NewWorkoutButton />
                    </a>
                </div>
                <WorkoutList
                    workouts={this.props.workouts}
                    user={this.props.currentUser}
                />
            </div>
        );
    }
}
const mapStateToProps = ({ getWorkouts, currentUser, workouts, getExercises }) => ({
    getWorkouts,
    getExercises,
    currentUser,
    workouts,
})

export default withRouter(
    connect(
        mapStateToProps,
        { getWorkouts, getExercises }
    )(Home)
);
