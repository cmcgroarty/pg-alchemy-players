import * as types from '../constants/AuthActionTypes'
import {setCallout, clearCallout} from './callout'

export const attemptLogin = credentials => dispatch => {
  dispatch(clearCallout())
  fetch('https://players-api.developer.alchemy.codes/api/login', {
    method: 'POST',
    body: credentials
  }).then(response => {
    if (response.success) {
      dispatch(this.loginSuccess(response))
      dispatch(setCallout({
        type: 'success',
        message: 'Welcome ' + response.user.first_name + ' ' + response.user.last_name
      }))
    } else {
      dispatch(setCallout(response.error || { message: response.status + ' ' + response.statusText }))
    }
  })
}
export const logout = () => ({type: types.LOGOUT})
export const loginSuccess = response => ({type: types.LOGIN_SUCCESS, user: response.user, token: response.token})
