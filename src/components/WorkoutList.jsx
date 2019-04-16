import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import WorkoutCard from './WorkoutCard';
import {getWorkouts} from '../redux/actions';

class WorkoutList extends Component {
  render(){
    return(
      <div className='workout-list'>
        <h1 style={{textAlign: 'center'}}>{this.props.user.fullname}'s Workout History</h1>
          {this.props.workouts.map((workout, index) => (
             <WorkoutCard key={index} workout={workout} />))}
      </div>
    );
  }
}

export default WorkoutList;
