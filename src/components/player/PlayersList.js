import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import PlayerItem from './PlayerItem'

const PlayerList = ({ players, actions }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Rating</th>
          <th>Handedness</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {players.map(player =>
          <PlayerItem key={player.id} player={player} actions={actions} />
        )}
      </tbody>
    </table>
    <div>
      <Link to='/player/create' className='button'>Create a Player</Link>
    </div>
  </div>
)

PlayerList.propTypes = {
  players: PropTypes.array,
  actions: PropTypes.object
}

export default PlayerList
