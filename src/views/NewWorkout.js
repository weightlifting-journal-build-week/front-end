import React, { Component } from 'react';
import ExerciseCard from '../components/ExerciseCard';
import NewExerciseButton from '../components/Buttons/NewExerciseButton';
import FinishWorkoutButton from '../components/Buttons/FinishWorkoutButton';
import styled from "styled-components";

const NewWorkoutDiv = styled.div`
  width: 35%;
  margin: 50px auto;
`;

const ActionButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonSpan = styled.div`
  margin: 15px;
`;

class WorkoutForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: [
                { id: 1, exercise: '' },
                { id: 2, exercise: '' },
                { id: 3, exercise: '' },
            ],
        };
    }

    newExercise() {
        console.log('newExercise');
    }

    finishExercise() {
        console.log('finishExercise');
    }

    updateExercise = (exercise, index) => {
        console.log('NewWorkout updateExercise exercise', exercise);
        console.log('NewWorkout updateExercise index', index);
        // this.setState({ newExercises: exercise });
        this.setState({
            exercises: [
                ...this.state.exercises.slice(0, index),
                { id: index + 1, exercise: exercise.value },
                ...this.state.exercises.slice(index + 1, this.state.exercises.length)
            ]
        });
    }

    render() {
        return (
            <NewWorkoutDiv>
                <button onClick={() => console.log('NewWorkout State', this.state)}>NewWorkout State</button>
                <button onClick={() => console.log('NewWorkout Props', this.props)}>NewWorkout Props</button>
                {this.state.exercises.map((exercise, index) => (
                    <ExerciseCard
                        key="index"
                        index={index}
                        exercise={this.updateExercise}
                    />
                ))}
                <ActionButtonsDiv>
                    <ButtonSpan onClick={() => this.newExercise()}>
                        <NewExerciseButton />
                    </ButtonSpan>
                    <ButtonSpan onClick={() => this.finishExercise()}>
                        <FinishWorkoutButton />
                    </ButtonSpan>
                </ActionButtonsDiv>
            </NewWorkoutDiv>
        );
    }
}

export default WorkoutForm;
