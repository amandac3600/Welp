import * as SessionApi from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})

export const logoutUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
})

export const login = formUser => dispatch => {
  return SessionApi.login(formUser)
    .then(user => dispatch(receiveUser(user)), error => dispatch(receiveErrors(error)))
}

export const signup = formUser => dispatch => {
  return SessionApi.signup(formUser)
    .then(user => dispatch(receiveUser(user)), error => dispatch(receiveErrors(error)))
}

export const logout = () => dispatch => {
  return SessionApi.logout()
    .then(() => {
      dispatch(logoutUser())}, error => dispatch(receiveErrors(error)))
}
