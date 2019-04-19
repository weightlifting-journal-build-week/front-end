import {
  LOGIN_START,
  LOGIN_SUCCESS,
  GET_WORKOUTS_START,
  GET_WORKOUTS_SUCCESS,
  GET_EXERCISES_START,
  GET_EXERCISES_SUCCESS,
  GET_SETS_START,
  GET_SETS_SUCCESS,
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
  gettingSets: false,
  sets: []
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
        exercises: [...state.exercises, action.payload]
      }
    case GET_SETS_START:
      return {
        ...state,
        gettingSets: true,
      }
    case GET_SETS_SUCCESS:
      return {
        ...state,
        gettingSets: false,
        sets: [...state.sets, action.payload]
      }
    case FAIL:
      return {
        ...state,
        loggingIn: false,
        gettingWorkouts: false,
        gettingExercises: false,
        gettingSets: false,
        error: action.payload
      }
    default:
      return state

  }
}

export default reducer;
