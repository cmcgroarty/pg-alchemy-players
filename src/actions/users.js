import * as types from '../constants/UsersActionsTypes';
import {setError} from './error';

export const fetchUsers = () => {
	fetch('').then(response => {
		if(response.success) {
			this.usersFetched(response.users);
		} else {
			setError(response.error);
		}
	})
};
export const createUser = user => {
	fetch( '', { method: 'POST', body: user } ).then(response => {
		if(response.success) {
			this.userCreated(response.user);
		} else {
			setError(response.error);
		}
	});
};
export const usersFetched = users => ( { type: types.USERS_FETCHED, users: users } );
export const userCreated = user => ( { type: types.USER_CREATED, user: user } );
