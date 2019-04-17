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
                { id: 1, exercise: '', sets: { set: 1, lbs: '', reps: '' } },
                { id: 2, exercise: '', sets: { set: 1, lbs: '', reps: '' } },
                { id: 3, exercise: '', sets: { set: 1, lbs: '', reps: '' } },
            ],
        };
    }

    newExercise() {
        this.setState({
            exercises: [
                ...this.state.exercises,
                { id: this.state.exercises.length + 1, exercise: '' },
            ]
        });
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

    updateReps = (reps, setNumber, exerciseCardIndex) => {
        console.log(`NewWorkout.js updateReps 
                    reps ${reps} 
                    this.state.exercise index ${setNumber} 
                    exerciseCardIndex ${exerciseCardIndex}`);
    }

    updatelbs = (lbs, setNumber, exerciseCardIndex) => {
        console.log(`NewWorkout.js updatelbs 
                    lbs ${lbs} 
                    this.state.exercise index ${setNumber + 1} 
                    exerciseCardIndex ${exerciseCardIndex}`);
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
                        reps={this.updateReps}
                        lbs={this.updatelbs}
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
