import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import ExerciseList from '../components/ExerciseList';
import {getExercises} from '../redux/actions';

class ExercisesView extends Component {
  componentDidMount(){
    this.props.getExercises(this.props.workoutID)
  }
  render(){
    if(this.props.gettingExercises){
      return(
        <Loader type="ThreeDots" color="#somecolor" height={80} width={80} />
      )
    }
    else {
      return (
        <ExerciseList workoutExercises={this.props.exercises.flat().filter(
          exercise => exercise.workout_id === this.props.workoutID)} 
        />
      )
    } 
  }
}

const mapStateToProps = state => {
  return({ 
    exercises: state.exercises,
    gettingExercises: state.gettingExercises
  })
}

export default connect(
  mapStateToProps,
  {getExercises}
)(ExercisesView);
