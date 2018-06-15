import {combineReducers} from 'redux'
import users from './users'
import players from './players'
import auth from './auth'
import callout from './callout'

const rootReducer = combineReducers({
  users,
  players,
  auth,
  callout
})

export default rootReducer
