import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import NewWorkoutButton from '../components/NewWorkoutButton';
import WorkoutList from '../components/WorkoutList';
import {getWorkouts} from '../redux/actions';

class WorkoutsView extends Component {
    componentDidMount(){
      this.props.getWorkouts(this.props.currentUser.id)

    }
    render() {
      /*      if(this.props.gettingWorkouts || this.props.gettingExercises){
        return (
          <Loader
            type="Puff"
            color="#00BFFF"
            height="100"
            width="100"
          />
        )
      }else{
      */
        return(
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
        )
      }
  // }
}
const mapStateToProps = 
  ({getWorkouts, currentUser, workouts, gettingWorkouts, gettingExercises}) => ({
    getWorkouts,
    currentUser,
    workouts,
    gettingWorkouts,
    gettingExercises
  })

export default withRouter(
  connect(
    mapStateToProps,
    {getWorkouts}
  )(WorkoutsView)
);
