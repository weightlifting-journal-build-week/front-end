import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

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
      if(this.props.gettingWorkouts){
        return(
          <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />
        )
      }
      else{
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
}
const mapStateToProps = ({ gettingWorkouts, gettingExercises, getWorkouts, currentUser, workouts, getExercises }) => ({
  getWorkouts,
  gettingWorkouts,
  getExercises,
  gettingExercises,
  currentUser,
  workouts,
})

export default withRouter(
  connect(
    mapStateToProps,
    {getWorkouts, getExercises}
  )(Home)
);
