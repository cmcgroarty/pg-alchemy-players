import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import PlayerItem from './PlayerItem'

class PlayersList extends Component {
  componentWillMount () {
    this.props.actions.clearError()
    this.props.actions.fetchPlayers()
  }

  render () {
    const {players, actions} = this.props
    return (
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
  }
}

PlayersList.propTypes = {
  players: PropTypes.array.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
}

export default connect(
  state => ({players: state.players})
)(PlayersList)
