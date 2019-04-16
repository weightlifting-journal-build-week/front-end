import {
  LOGIN_START,
  LOGIN_SUCCESS,
  GET_WORKOUTS_START,
  GET_WORKOUTS_SUCCESS,
  GET_EXERCISES_START,
  GET_EXERCISES_SUCCESS,
  FAIL } from '../actions';

const initialState = {
  error: '',
  currentUser: {
    id: 1,
    fullname: 'Master Yoda',
    email: 'master@jedicouncil.com',
    username: 'flippySlashSlash',
    height: 36,
    weight: 80
  },
  loggingIn: false,
  token: 'fakeToken',
  gettingWorkouts: false,
  workouts: [],
  gettingExercises: false,
  exercises: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loggingIn: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        token: action.payload
      }
    case GET_WORKOUTS_START:
      return {
        ...state,
        gettingWorkouts: true
      }
    case GET_WORKOUTS_SUCCESS:
      return {
        ...state,
        gettingWorkouts: false,
        workouts: action.payload
      }
    case GET_EXERCISES_START:
      return {
        ...state,
        gettingExercises: true,
      }
    case GET_EXERCISES_SUCCESS:
      return {
        ...state,
        gettingExercises: false,
        exercises: action.payload
      }
    case FAIL:
      return {
        ...state,
        loggingIn: false,
        gettingWorkouts: false,
        gettingExercises: false,
        error: action.payload
      }
    default:
      return state

  }
}

export default reducer;
