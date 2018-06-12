import * as types from '../constants/PlayersActionsTypes';

const initialState = [];

export default function players(state=initialState, action){
	switch(action.type){
		case types.PLAYERS_FETCHED:
			return action.players;
		case types.PLAYER_CREATED:
			return [...state, action.player];
		case types.PLAYER_DELETED:
			return state.filter(player => player.id !== action.id);
	}
}

