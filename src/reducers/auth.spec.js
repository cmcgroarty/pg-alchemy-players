import auth from './auth';
import * as types from '../constants/AuthActionTypes';


describe('auth reducer', () => {
	it( 'should handle initial state', () => {
		expect( auth( undefined, {} ) ).toEqual( {token: undefined, user: undefined} );
	} );
});