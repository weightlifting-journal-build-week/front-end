import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import NewWorkoutButton from '../components/Buttons/NewWorkoutButton';
import WorkoutList from '../components/WorkoutList';
import { getWorkouts, getExercises } from '../redux/actions';

class WorkoutsView extends Component {
    state = {
        user: '',
    }

    componentDidMount() {
        this.props.getWorkouts(1);
        // {
        //     axios.get(`https://lifting-app.herokuapp.com/users/1/workouts`)
        //         .then(res => {
        //             console.log(res)
        //             // const persons = res.data;
        //             // this.setState({ persons });
        //         })
        // }

        // this.props.getExercises(3);
    }
    render() {
        return (
            <div className="workouts-view">
                <button onClick={() => console.log('WorkoutHistory this.props', this.props)}>Props</button>
                <button onClick={() => console.log('test', this.props.workouts)}>Workouts</button>
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
    )(WorkoutsView)
);
