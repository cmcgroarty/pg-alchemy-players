import * as types from '../constants/ErrorActionTypes';

export const setError = (error = {message: 'An Error has Occurred'}) => ({type:types.SET_ERROR, error:error});
export const clearError = () => ({type:types.CLEAR_ERROR});