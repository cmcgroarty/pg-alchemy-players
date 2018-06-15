import * as types from '../constants/UsersActionsTypes'
import {setCallout, clearCallout} from './callout'

export const fetchUsers = () => dispatch =>
  fetch('https://players-api.developer.alchemy.codes/api/user/').then(response => {
    if (response.success) {
      dispatch(this.usersFetched(response.users))
    } else {
      dispatch(setCallout(response.error || {message: response.status + ' ' + response.statusText}))
    }
  })
export const createUser = user => dispatch => {
  dispatch(clearCallout())
  fetch('https://players-api.developer.alchemy.codes/api/user/', { method: 'POST', body: user }).then(response => {
    if (response.success) {
      dispatch(this.userCreated(response.user))
      dispatch(setCallout({
        type: 'success',
        message: 'User ' + response.user.first_name + ' ' + response.user.last_name + ' Created'
      }))
    } else {
      dispatch(setCallout(response.error || { message: response.status + ' ' + response.statusText }))
    }
  })
}
export const usersFetched = users => ({ type: types.USERS_FETCHED, users: users })
export const userCreated = user => ({ type: types.USER_CREATED, user: user })
