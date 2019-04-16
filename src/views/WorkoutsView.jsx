import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import NewWorkoutButton from '../components/NewWorkoutButton';
import WorkoutList from '../components/WorkoutList';
import {getWorkouts} from '../redux/actions';

class WorkoutsView extends Component {
  constructor(){
    super();
    this.state = {
      userID: 1
    }
  }
  
  componentDidMount(){
    this.props.getWorkouts(this.state.userID);
  }

  render() {
    return(
      <div className="workouts-view">
        <NewWorkoutButton />
        <WorkoutList 
          currentUser={this.props.currentUser}
          workouts={this.props.workouts}
        />
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
