import * as types from '../constants/UsersActionsTypes'
import {setError} from './error'

export const fetchUsers = () => dispatch =>
  fetch('').then(response => {
    if (response.success) {
      dispatch(this.usersFetched(response.users))
    } else {
      dispatch(setError(response.error))
    }
  })
export const createUser = user => dispatch =>
  fetch('', { method: 'POST', body: user }).then(response => {
    if (response.success) {
      dispatch(this.userCreated(response.user))
    } else {
      dispatch(setError(response.error))
    }
  })
export const usersFetched = users => ({ type: types.USERS_FETCHED, users: users })
export const userCreated = user => ({ type: types.USER_CREATED, user: user })
