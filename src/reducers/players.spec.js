import players from './players'
import * as types from '../constants/PlayersActionsTypes'

describe('players reducer', () => {
  it('should handle initial state', () => {
    expect(players(undefined, {})).toEqual([])
  })
  it('should handle PLAYERS_FETCHED', () => {
    expect(players([], {
      type: types.PLAYERS_FETCHED,
      players: [ {
        id: 1,
        first_name: 'Bruce',
        last_name: 'Wayne',
        rating: '100',
        handedness: 'right'
      } ]
    })).toEqual([ {
      id: 1,
      first_name: 'Bruce',
      last_name: 'Wayne',
      rating: '100',
      handedness: 'right'
    } ])
  })
  it('should handle PLAYER_CREATED', () => {
    expect(players([ {
      id: 1,
      first_name: 'Bruce',
      last_name: 'Wayne',
      rating: '100',
      handedness: 'right'
    } ], {
      type: types.PLAYER_CREATED,
      player: { id: 2, first_name: 'John', last_name: 'Wayne', rating: '100', handedness: 'right' }
    })).toEqual([ {
      id: 1,
      first_name: 'Bruce',
      last_name: 'Wayne',
      rating: '100',
      handedness: 'right'
    }, {
      id: 2,
      first_name: 'John',
      last_name: 'Wayne',
      rating: '100',
      handedness: 'right'
    } ])
  })

  it('should handle PLAYER_DELETED', () => {
    expect(players([ {
      id: 1,
      first_name: 'Bruce',
      last_name: 'Wayne',
      rating: '100',
      handedness: 'right'
    } ], { type: types.PLAYER_DELETED, id: 1 })).toEqual([])
  })
})
