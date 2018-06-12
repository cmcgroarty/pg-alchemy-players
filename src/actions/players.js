import * as types from '../constants/PlayersActionsTypes';
import {setError} from './error';

export const fetchPlayers = () => {
	fetch('').then(response => {
		if(response.success){
			this.playersFetched(response.players);
		} else {
			setError(response.error);
		}
	});
};
export const createPlayer = player => {
	fetch('', {method: 'POST', body: player}).then(response => {
		if(response.success){
			this.playerCreated(player);
		} else {
			setError(response.error);
		}
	});
};
export const deletePlayer = id => {};
export const playersFetched = players => ({type:types.PLAYERS_FETCHED, players:players});
export const playerCreated = player => ({type:types.PLAYER_CREATED, player: player});
export const playerDeleted = id => ({type:types.PLAYER_DELETED, id: id});

