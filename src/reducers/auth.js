import * as types from '../constants/AuthActionTypes';

const initialState = {
	user: undefined,
	token: undefined
};

export default function auth( state = initialState, action ) {
	switch ( action.type ) {
		case types.LOGIN_SUCCESS:
			return { user: action.user, token: action.token };
		case types.LOGOUT:
			return initialState;
		default:
			return state;
	}
}