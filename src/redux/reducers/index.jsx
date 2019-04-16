import {
    LOGIN_START,
    LOGIN_SUCCESS,
    GET_WORKOUTS_START,
    GET_WORKOUTS_SUCCESS,
    FAIL
} from '../actions';

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
    case FAIL:
      return {
        ...state,
        loggingIn: false,
        gettingWorkouts: false,
        error: action.payload
      }
    default:
      return state

  }
}

export default reducer;
