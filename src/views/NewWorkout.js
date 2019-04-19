import React, { Component } from 'react';
import ExerciseCard from '../components/ExerciseCard';
import NewExerciseButton from '../components/Buttons/NewExerciseButton';
import FinishWorkoutButton from '../components/Buttons/FinishWorkoutButton';
import styled from "styled-components";
import axios from 'axios';

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
                { id: 1, exercise: '', sets: { set: 1, lbs: '', reps: '' } }
            ],
            newWorkoutID: '',
            newExerciseID: '',
            targetArea: {
                'Barbell Row': 'Back and biceps',
                'Bench Press': 'Chest, shoulders and triceps',
                'Deadlift': 'Legs, back and abs',
                'Front Squat': 'Legs',
                'Overhead Press': 'Shoulders and triceps',
                'Squat': 'Legs',
            }
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
        axios
            // Get workouts from workouts table
            .get(`https://lifting-app.herokuapp.com/workouts`)
            .then(response => {
                // Sets newWorkoutID in component state to the next id from the response
                this.setState({ newWorkoutID: response.data[response.data.length - 1].id + 1 });
                // Loop through exercises in state and create a new array
                const workoutNameArray = this.state.exercises.map(exercise => exercise.exercise);
                // Creates a string with the exercise names from the new array
                const workoutNameString = workoutNameArray.length === 1 ?
                    workoutNameArray[0] :
                    workoutNameArray.slice(0, -1).join(', ') + ' and ' + workoutNameArray.slice(-1);
                // Creates a string of with the current date and time based on the user
                const currentDate = new Date().toLocaleTimeString('en-us', { weekday: 'long', month: 'long', day: 'numeric' });
                // Creates a workout object to send to the workouts table
                const workout = {
                    id: this.state.newWorkoutID,
                    name: workoutNameString,
                    date: currentDate,
                    user_id: 1,
                };
                // Send a post request to the workouts table and console log the results
                axios
                    .post(`https://lifting-app.herokuapp.com/workouts`, workout)
                    .then(response => { console.log('NewWorkout finishExercise axios.post workout', response) })
                    .catch(err => { console.log(err) });
            })
            .catch(err => { console.log('NewWorkout finishExercise error', err) });

        axios
            .get(`https://lifting-app.herokuapp.com/exercises`)
            .then(response => {
                this.setState({ newExerciseID: response.data[response.data.length - 1].id + 1 });
                const exercises = this.state.exercises.map((exercise, index) => ({
                    id: this.state.newExerciseID + index,
                    name: exercise.exercise,
                    targetArea: this.state.targetArea[exercise.exercise],
                    workout_id: this.state.newWorkoutID,
                }));
                console.log('NewWorkout finishExercise exercises', exercises)
                axios
                    .post(`https://lifting-app.herokuapp.com/exercises`, exercises)
                    .then(response => { console.log('NewWorkout finishExercise axios.post exercise', response) })
                    .catch(err => { console.log(err) });
            })
            .catch(err => { console.log('https://lifting-app.herokuapp.com/exercises error', err) });

        axios
            .get(`https://lifting-app.herokuapp.com/sets`)
            .then(response => {
                this.setState({ newSetID: response.data[response.data.length - 1].id + 1 });
                const sets = this.state.exercises.map((exercise, exerciseIndex) =>
                    (exercise.sets
                        .map((set, setIndex) => (
                            {
                                reps: set.reps,
                                weight: set.lbs,
                                exercise_id: this.state.newExerciseID + exerciseIndex,
                            }
                        ))
                    )
                ).flat().map((set, index) => ({
                    id: this.state.newSetID + index,
                    ...set,
                }));

                axios
                    .post(`https://lifting-app.herokuapp.com/sets`, sets)
                    .then(response => { console.log('NewWorkout finishExercise axios.post sets', response) })
                    .catch(err => { console.log(err) });
            })
            .catch(err => { console.log('https://lifting-app.herokuapp.com/sets error', err) });
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
        const currentExercise = this.state.exercises[exerciseCardIndex];
        const currentSets = currentExercise.sets;
        const currentSetsLength = currentSets.length >= 1 ? currentSets.length : 1;
        const currentSet = currentSets.length === 1 ? currentSets : currentSets[setNumber];
        const earlySets = currentSetsLength === 1 ? [] : currentSets.slice(0, setNumber);
        const laterSets = currentSetsLength === 1 ? [] : currentSets.slice(setNumber + 1, currentSetsLength);
        const updatedSets = [...earlySets, { set: currentSet.set, lbs: currentSet.lbs, reps: reps }, ...laterSets];

        this.setState({
            exercises: [
                ...this.state.exercises.slice(0, exerciseCardIndex),
                { id: currentExercise.id, exercise: currentExercise.exercise, sets: updatedSets },
                ...this.state.exercises.slice(exerciseCardIndex + 1, this.state.exercises.length)
            ]
        });
    }

    updatelbs = (lbs, setNumber, exerciseCardIndex) => {
        const currentExercise = this.state.exercises[exerciseCardIndex];
        const currentSets = currentExercise.sets;
        const currentSetsLength = currentSets.length >= 1 ? currentSets.length : 1;
        const currentSet = currentSetsLength === 1 ? currentSets : currentSets[setNumber];
        const earlySets = currentSetsLength === 1 ? [] : currentSets.slice(0, setNumber);
        const laterSets = currentSetsLength === 1 ? [] : currentSets.slice(setNumber + 1, currentSetsLength);
        const updatedSets = [...earlySets, { set: currentSet.set, lbs: lbs, reps: currentSet.reps }, ...laterSets];
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
