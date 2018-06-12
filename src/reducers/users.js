import * as types from '../constants/UsersActionsTypes';

const initialState = [];

export default function users(state=initialState, action){
	switch(action.type){
		case types.USERS_FETCHED:
			return action.users;
		case types.USER_CREATED:
			return [...state, action.user];
		default:
			return state;
	}
}

