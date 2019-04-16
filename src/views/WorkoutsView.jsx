import React, { Component } from 'react';
import NewWorkoutButton from '../components/NewWorkoutButton';
import WorkoutCard from '../components/WorkoutCard';


class WorkoutsView extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: {
                username: 'Superman',
                email: 'clarkkent@superman.com',
                id: 1
            }
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
                <WorkoutCard user={this.state.currentUser} />
            </div>
        );
    }
}

export default WorkoutsView;
