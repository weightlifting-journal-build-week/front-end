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
        const sets = this.state.exercises[index].sets;
        this.setState({
            exercises: [
                ...this.state.exercises.slice(0, index),
                { id: index + 1, exercise: exercise.value, sets: sets },
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
        const currentExercise = this.state.exercises[exerciseCardIndex];
        const currentSets = currentExercise.sets;
        const currentSetsLength = currentSets.length >= 1 ? currentSets.length : 1;
        const currentSet = currentSets.length > 1 ? currentSets[setNumber] : currentSets;
        const earlySets = currentSetsLength === 1 ? [] : currentSets.slice(0, setNumber);
        const laterSets = currentSetsLength === 1 ? [] : currentSets.slice(setNumber + 1, currentSetsLength);
        const updatedSet = { set: currentSet.set, lbs: currentSet.lbs, reps: reps };
        const updatedSets = [...earlySets, updatedSet, ...laterSets];

        console.log('currentSets', currentSets);
        console.log('currentSet', currentSet);
        console.log('updatedSet', updatedSet)

        this.setState({
            exercises: [
                ...this.state.exercises.slice(0, exerciseCardIndex),
                { id: currentExercise.id, exercise: currentExercise.exercise, sets: updatedSets },
                ...this.state.exercises.slice(exerciseCardIndex + 1, this.state.exercises.length)
            ]
        });
    }

    updatelbs = (lbs, setNumber, exerciseCardIndex) => {
        let currentExercise = this.state.exercises[exerciseCardIndex];
        let currentSets = currentExercise.sets;
        let currentSetsLength = currentSets.length >= 1 ? currentSets.length : 1;

        let currentSet = currentSetsLength === 1 ? currentSets : currentSets[setNumber];
        let currentSetId = currentSet.set;
        let currentReps = currentSet.reps;

        let earlySets = currentSetsLength === 1 ? [] : currentSets.slice(0, setNumber);
        let laterSets = currentSetsLength === 1 ? [] : currentSets.slice(setNumber + 1, currentSetsLength);
        let updatedSets = [...earlySets, { set: currentSet.set, lbs: lbs, reps: currentSet.reps }, ...laterSets];

        console.log('this.state.exercises ', this.state.exercises);
        console.log('lbs ', lbs);
        console.log('setNumber ', setNumber);
        console.log('exerciseCardIndex ', exerciseCardIndex);
        console.log('currentExercise', currentExercise);
        console.log('currentExerciseID', currentExercise.id);
        console.log('currentExerciseName', currentExercise.exercise);

        console.log('currentSets', currentSets);
        console.log('currentSetsLength', currentSetsLength);
        console.log('currentSet', currentSet);
        console.log('currentSetId', currentSetId);
        console.log('currentReps', currentReps);

        console.log('earlySets', earlySets);
        console.log('laterSets', laterSets);
        console.log('updatedSets', updatedSets);
        console.log('________________________________________');

        this.setState({
            exercises: [
                ...this.state.exercises.slice(0, exerciseCardIndex),
                { id: currentExercise.id, exercise: currentExercise.exercise, sets: updatedSets },
                ...this.state.exercises.slice(exerciseCardIndex + 1, this.state.exercises.length)
            ]
        });
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
                <button onClick={() => console.log('NewWorkout State', this.state.exercises)}>NewWorkout State</button>
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
