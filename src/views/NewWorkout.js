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
                { id: 1, exercise: 'Squat' },
                { id: 2, exercise: 'Bench Press' },
                { id: 3, exercise: 'Deadlift' },
            ],
        };
    }

    newExercise() {
        console.log('newExercise');
    }

    finishExercise() {
        console.log('finishExercise');
    }
    render() {
        return (
            <NewWorkoutDiv>
                {this.state.exercises.map(exercise => (
                    <ExerciseCard />
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
