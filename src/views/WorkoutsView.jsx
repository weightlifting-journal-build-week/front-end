import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import WorkoutCard from '../components/WorkoutCard';
import NewWorkoutButton from '../components/NewWorkoutButton';
import WorkoutList from '../components/WorkoutList';
import {getWorkouts} from '../redux/actions';

class WorkoutsView extends Component {
    componentDidMount(){
      this.props.getWorkouts(this.props.currentUser.id)

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
const mapStateToProps = ({getWorkouts, currentUser, workouts}) => ({
  getWorkouts,
  currentUser,
  workouts,
})

export default withRouter(
  connect(
    mapStateToProps,
    {getWorkouts}
  )(WorkoutsView)
);
