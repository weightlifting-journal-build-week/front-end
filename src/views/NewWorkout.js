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
            ],
        };
    }

    newExercise() {
        this.setState({
            exercises: [
                ...this.state.exercises,
                {
                    id: this.state.exercises.length === 0 ? 1 : this.state.exercises[this.state.exercises.length - 1].id + 1,
                    exercise: '',
                    sets: [{ set: 1, lbs: '', reps: '' }]
                },
            ]
        });
    }

    finishExercise() {
        console.log('finishExercise');
    }

    updateExercise = (exercise, index) => {
        this.setState({
            exercises: [
                ...this.state.exercises.slice(0, index),
                { id: index + 1, exercise: exercise.value },
                ...this.state.exercises.slice(index + 1, this.state.exercises.length)
            ]
        });
    }

    updateSets = (sets, index) => {
        this.setState({
            exercises: [
                ...this.state.exercises.slice(0, index),
                { id: index + 1, sets: sets },
                ...this.state.exercises.slice(index + 1, this.state.exercises.length)
            ]
        });
    }

    updateReps = (reps, setNumber, exerciseCardIndex) => {
        console.log(`NewWorkout.js updateReps 
                    reps ${reps} 
                    setNumber ${setNumber} 
                    exerciseCardIndex ${exerciseCardIndex}`);
    }

    updatelbs = (lbs, setNumber, exerciseCardIndex) => {
        console.log(`NewWorkout.js updatelbs 
                    lbs ${lbs} 
                    setNumber ${setNumber + 1} 
                    exerciseCardIndex ${exerciseCardIndex}`);
        console.log('this.state.exercises[exerciseCardIndex]', this.state.exercises[exerciseCardIndex]);
    }

    deleteExercise = index => {
        console.log('NewWorkout deleteExercise', index);
        const { exercises } = this.state;
        this.setState({
            exercises: exercises.slice(0, index).concat(exercises.slice(index + 1, exercises.length))
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
                        sets={this.updateSets}
                        reps={this.updateReps}
                        lbs={this.updatelbs}
                        deleteExercise={this.deleteExercise}
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
