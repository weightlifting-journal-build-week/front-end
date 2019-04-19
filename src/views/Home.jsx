import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import Loader from 'react-loader-spinner';

import NewWorkoutButton from '../components/Buttons/NewWorkoutButton';
import WorkoutList from '../components/WorkoutList';
import { getWorkouts, getExercises, getCurrentUser } from '../redux/actions';

class Home extends Component {
    state = {
        user: '',
    }

    componentDidMount() {
        console.log("Home Props", this.props)
        let token = this.props.token;
        let decoded = jwt.decode(token);
        console.log("Decoded Token:", decoded);
        if(decoded){
            let id = decoded.subject
            this.props.getCurrentUser(id);
            this.props.getWorkouts(id);
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
const mapStateToProps = ({ getWorkouts, currentUser, workouts, gettingWorkouts, getExercises, token, getCurrentUser }) => ({
    getWorkouts,
    getExercises,
    getCurrentUser,
    currentUser,
    workouts,
    token,
    gettingWorkouts
})

export default withRouter(
    connect(
        mapStateToProps,
        { getWorkouts, getExercises, getCurrentUser }
    )(Home)
);
