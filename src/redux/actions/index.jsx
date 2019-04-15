export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const FAIL = 'FAIL';

const url = 'http://';

export const login = credentials => dispatch => { 
  dispatch({action: LOGIN_START})
  return axios.post(url, credentials)
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
