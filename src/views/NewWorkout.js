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
        this.state = {};
    }

    newExercise() {
        console.log('newExercise');
    }

    render() {
        return (
            <NewWorkoutDiv>
                <ExerciseCard />
                <div onClick={() => this.newExercise()}>
                    <NewExerciseButton />
                </div>
            </NewWorkoutDiv>
        );
    }
}

export default WorkoutForm;
