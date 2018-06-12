import {combineReducers} from 'redux';
import users from './users';
import players from './players';
import auth from './auth';
import error from './error';

const rootReducer = combineReducers({
	users,
	players,
	auth,
	error
})

export default rootReducer;