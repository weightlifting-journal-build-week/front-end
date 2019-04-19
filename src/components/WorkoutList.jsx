import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import ExercisesView from '../views/ExercisesView';

class WorkoutList extends Component {
    render() {
        return (
            <div className='workout-list'>
                <Typography variant="h4" gutterBottom align="center"> Welcome {this.props.user ? this.props.user.fullname : "N/A"}</Typography>
                {this.props.workouts.map((workout, index) => (
                    <ExercisesView key={index} workout={workout} />
                ))}
            </div>
        );
    }
}

export default WorkoutList;
