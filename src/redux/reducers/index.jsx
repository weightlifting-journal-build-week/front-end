import {
LOGIN_START,
LOGIN_SUCCESS,
FAIL
} from '../actions';

const initialState = {
  loggingIn:false,
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
    default:
      return state

  }
}

export default reducer;
