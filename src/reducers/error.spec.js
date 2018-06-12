import error from './error';
import * as types from '../constants/ErrorActionTypes';

describe( 'error reducer', () => {
	it( 'should handle initial state', () => {
		expect( error( undefined, {} ) ).toEqual( { display: false, message: '' } );
	} );
	it( 'should handle SET_ERROR', () => {
		expect( error( {}, {
			type: types.SET_ERROR,
			error: { status_code: 403, message: 'Access denied', code: 'Forbidden' }
		} ) ).toEqual( { display: true, message: 'Access denied' } );
	} );
	it( 'should handle CLEAR_ERROR', () => {
		expect( error( {
			display: true,
			message: 'Access denied'
		}, { type: types.CLEAR_ERROR } ) ).toEqual( { display: false, message: '' } );
	} );
} );