import * as types from '../constants/PlayersActionsTypes'
import {setCallout, clearCallout} from './callout'

const authHeader = (getState) => new Headers({
  'Authorization': 'Bearer ' + getState().auth.token
})
export const fetchPlayers = () => (dispatch, getState) => {
  dispatch(clearCallout())
  fetch('https://players-api.developer.alchemy.codes/api/players/', { headers: authHeader(getState) }).then(response => {
    if (response.success) {
      dispatch(this.playersFetched(response.players))
    } else {
      dispatch(setCallout(response.error || { message: response.status + ' ' + response.statusText }))
    }
  })
}
export const createPlayer = player => (dispatch, getState) => {
  dispatch(clearCallout())
  fetch('https://players-api.developer.alchemy.codes/api/players/', {
    method: 'POST',
    headers: authHeader(getState),
    body: player
  }).then(response => {
    if (response.success) {
      dispatch(this.playerCreated(response.player))
      dispatch(setCallout({
        type: 'success',
        message: 'Player ' + response.player.first_name + ' ' + response.player.last_name + ' Created'
      }))
    } else {
      dispatch(setCallout(response.error || { message: response.status + ' ' + response.statusText }))
    }
  })
}
export const deletePlayer = id => (dispatch, getState) => {
  dispatch(clearCallout())
  fetch('https://players-api.developer.alchemy.codes/api/players/' + id, {
    method: 'DELETE',
    headers: authHeader(getState)
  }).then(response => {
    if (response.success) {
      dispatch(this.playerDeleted(id))
    } else {
      dispatch(setCallout(response.error || { message: response.status + ' ' + response.statusText }))
    }
  })
}

export const playersFetched = players => ({type: types.PLAYERS_FETCHED, players: players})
export const playerCreated = player => ({type: types.PLAYER_CREATED, player: player})
export const playerDeleted = id => ({type: types.PLAYER_DELETED, id: id})
