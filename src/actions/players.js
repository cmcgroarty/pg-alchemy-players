import * as types from '../constants/PlayersActionsTypes'
import {setError} from './error'

export const fetchPlayers = () => dispatch =>
  fetch('').then(response => {
    if (response.success) {
      dispatch(this.playersFetched(response.players))
    } else {
      dispatch(setError(response.error))
    }
  })

export const createPlayer = player => dispatch =>
  fetch('', {method: 'POST', body: player}).then(response => {
    if (response.success) {
      dispatch(this.playerCreated(player))
    } else {
      dispatch(setError(response.error))
    }
  })

export const deletePlayer = id => dispatch =>
  fetch('' + id, {method: 'DELETE'}).then(response => {
    if (response.success) {
      dispatch(this.playerDeleted(id))
    } else {
      dispatch(setError(response.error))
    }
  })

export const playersFetched = players => ({type: types.PLAYERS_FETCHED, players: players})
export const playerCreated = player => ({type: types.PLAYER_CREATED, player: player})
export const playerDeleted = id => ({type: types.PLAYER_DELETED, id: id})
