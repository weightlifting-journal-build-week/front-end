import {
LOGIN_START,
LOGIN_SUCCESS,
GET_WORKOUTS_START,
GET_WORKOUTS_SUCCESS,
FAIL
} from '../actions';

const initialState = {
  user: {},
  loggingIn: false,
  gettingWorkouts: false,
  error: '',
  token: localStorage.getItem('token') 
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
      case 
    case 
    default:
      return state

  }
}

export default reducer;
