import React from 'react';
import NewWorkoutForm from '../components/NewWorkoutForm';
import NewExerciseButton from '../components/NewExerciseButton';
import styled from "styled-components";

const NewWorkoutDiv = styled.div`
  width: 35%;
  margin: 50px auto;
`;

class WorkoutForm extends React.Component {
    render() {
        return (
            <NewWorkoutDiv>
                <NewWorkoutForm />
                <NewExerciseButton />
            </NewWorkoutDiv>
        );
    }
}

export default WorkoutForm;
