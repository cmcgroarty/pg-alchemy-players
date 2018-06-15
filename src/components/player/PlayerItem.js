import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PlayerItem extends Component {

  handleDelete (id) {
    this.props.actions.deletePlayer(id)
  };

  render () {
    const { player } = this.props
    return (
      <tr>
        <td>{player.first_name}</td>
        <td>{player.last_name}</td>
        <td>{player.rating}</td>
        <td>{player.handedness}</td>
        <td>
          <button onClick={() => this.handleDelete(player.id)} title='Delete Player'>&times;</button>
        </td>
      </tr>
    )
  }
}

PlayerItem.propTypes = {
  player: PropTypes.object,
  actions: PropTypes.objectOf(PropTypes.func)
}
