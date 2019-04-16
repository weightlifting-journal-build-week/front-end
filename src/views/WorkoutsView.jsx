import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import WorkoutCard from '../components/WorkoutCard';
import NewWorkoutButton from '../components/NewWorkoutButton';
import WorkoutList from '../components/WorkoutList';
import {getWorkouts} from '../redux/actions';

class WorkoutsView extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: {
                username: 'Superman',
                email: 'clarkkent@superman.com',
                id: 1
            }
        }
    }

    render() {
        return (
            <div className="workouts-view">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <a href="/new">
                        <NewWorkoutButton />
                    </a>
                </div>
                <WorkoutCard user={this.state.currentUser} />
            </div>
        );
    }
}
const mapStateToProps = ({getWorkouts, currentUser, workouts}) => ({
  getWorkouts,
  currentUser,
  workouts
})

export default withRouter(
  connect(
    mapStateToProps,
    {getWorkouts}
  )(WorkoutsView)
);
