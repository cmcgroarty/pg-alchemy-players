import * as types from '../constants/AuthActionTypes'
import {setError} from './error'

export const attemptLogin = credentials => dispatch =>
  fetch('', {method: 'POST', body: credentials}).then(response => {
    if (response.success) {
      dispatch(this.loginSuccess(response))
    } else {
      dispatch(setError(response.error))
    }
  })
export const logout = () => ({type: types.LOGOUT})
export const loginSuccess = response => ({type: types.LOGIN_SUCCESS, user: response.user, token: response.token})
