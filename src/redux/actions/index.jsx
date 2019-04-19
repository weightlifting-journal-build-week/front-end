import axios from 'axios';

export const FAIL = 'FAIL';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const url = 'https://lifting-app.herokuapp.com/';

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START })
    axios.post(`${url}auth/login`, credentials)
        .then(response => {
            let token = response.data.token
            localStorage.setItem('token', token)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: token
            })
        })
        .catch(error => {
            dispatch({
                type: FAIL,
                payload: error
            })
        })
};


export const GET_CURRENT_USER_START = 'GET_CURRENT_USER_START';
export const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';


export const getCurrentUser = id => dispatch => {
    dispatch({
        type: GET_CURRENT_USER_START
    })
    return axios
        .get(`${url}users/${id}`)
        .then(response => {
            dispatch({
                type: GET_CURRENT_USER_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: FAIL,
                payload: error
            })
        })
};

export const GET_WORKOUTS_START = 'GET_WORKOUTS_START';
export const GET_WORKOUTS_SUCCESS = 'GET_WORKOUTS_SUCCESS';

export const getWorkouts = id => dispatch => {
    dispatch({
        type: GET_WORKOUTS_START
    })
    return axios
        .get(`${url}users/${id}/workouts`)
        .then(response => {
            dispatch({
                type: GET_WORKOUTS_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: FAIL,
                payload: error
            })
        })
};

export const GET_EXERCISES_START = 'GET_EXERCISES_START';
export const GET_EXERCISES_SUCCESS = 'GET_EXERCISES_SUCCESS';

export const getExercises = workoutID => dispatch => {
    dispatch({
        type: GET_EXERCISES_START
    })
    return axios
        .get(`${url}workouts/${workoutID}/exercises`)
        .then(response => {
            dispatch({
                type: GET_EXERCISES_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => (
            dispatch({
                type: FAIL,
                payload: error
            })
        ))
}
