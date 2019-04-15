import axios from 'axios';

export const FAIL = 'FAIL';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const url = 'https://lifting-app.herokuapp.com/';

export const login = credentials => dispatch => { 
  dispatch({action: LOGIN_START})
  axios.post(url, credentials)
  .then(response => {
    localStorage.setItem('token', response.data.payload)
    dispatch({
      action: LOGIN_SUCCESS,
      payload: response.data.payload
    })
  })
  .catch(error => {
    dispatch({
      action: FAIL,
      payload: error
    })
  })
}

export const GET_WORKOUTS_START = 'GET_WORKOUTS_START';
export const GET_WORKOUTS_SUCCESS = 'GET_WORKOUTS_SUCCESS';

export const userWorkouts = () => dispatch => {
  dispatch({action: GET_WORKOUTS_START});
  axios.get(`${url}/users/1/workouts`)
    .then(response => {
      console.log(response);
      dispatch({
        action: LOGIN_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      dispatch({
        action: FAIL,
        payload: error
      })
    })
}
