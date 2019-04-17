import React, { Component } from 'react';
import ExerciseCard from '../components/ExerciseCard';
import NewExerciseButton from '../components/NewExerciseButton';
import styled from "styled-components";
import ExerciseSelector from '../components/ExerciseSelector';

const NewWorkoutDiv = styled.div`
  width: 35%;
  margin: 50px auto;
`;

class WorkoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: [
                { id: 1, exercise: 'Squat' },
                { id: 2, exercise: 'Bench Press' },
                { id: 3, exercise: 'Deadlift' },
            ],
        };
    }

    newExercise() {
        console.log('newExercise');
    }

    render() {
        return (
            <NewWorkoutDiv>
                {this.state.exercises.map(exercise => (
                    <ExerciseCard />
                ))}
                <div onClick={() => this.newExercise()}>
                    <NewExerciseButton />
                </div>
            </NewWorkoutDiv>
        );
    }
}

export default WorkoutForm;
