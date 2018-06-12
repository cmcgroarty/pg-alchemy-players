import users from './users';
import * as types from '../constants/UsersActionsTypes';

describe( 'users reducer', () => {
	it( 'should handle initial state', () => {
		expect( users( undefined, {} ) ).toEqual( [] );
	} );
	it( 'should handle USER_CREATED', () => {
		expect( users( [], {
			type: types.USER_CREATED,
			user: { first_name: 'Chris', last_name: 'McGroarty', email: 'chris@gmail.com' }
		} ) ).toEqual( [ { first_name: 'Chris', last_name: 'McGroarty', email: 'chris@gmail.com' } ] );
	} );
} );