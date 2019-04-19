import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import NewWorkoutButton from '../components/Buttons/NewWorkoutButton';
import WorkoutList from '../components/WorkoutList';
import { getWorkouts, getExercises, getCurrentUser } from '../redux/actions';

class Home extends Component {
    state = {
        user: '',
    }

    componentDidMount() {

        this.props.getWorkouts(1);
        console.log("Home Props", this.props)
        let token = this.props.token;
        let decoded = jwt.decode(token);
        console.log("Decoded Token:", decoded);
        if(decoded){
            let id = decoded.subject
            this.props.getCurrentUser(id);
        }
    }

    componentWillReceiveProps(nextProps){
        console.log("Home NextProps", nextProps);
        if(nextProps.currentUser == undefined){
            this.props.history.push('/login');
            return
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
                <WorkoutList
                    workouts={this.props.workouts}
                    user={this.props.currentUser}
                />
            </div>
        );
    }
}
const mapStateToProps = ({ getWorkouts, currentUser, workouts, getExercises, token, getCurrentUser }) => ({
    getWorkouts,
    getExercises,
    getCurrentUser,
    currentUser,
    workouts,
    token
})

export default withRouter(
    connect(
        mapStateToProps,
        { getWorkouts, getExercises, getCurrentUser }
    )(Home)
);
