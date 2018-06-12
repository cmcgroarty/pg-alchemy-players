import * as types from '../constants/ErrorActionTypes';

const initialState = {display: false, message:''};

export default function error(state = initialState, action){
	switch(action.type) {
		case types.SET_ERROR:
			return {display:true, message:action.error.message};
		case types.CLEAR_ERROR:
			return {display:false, message:''};
	}
}