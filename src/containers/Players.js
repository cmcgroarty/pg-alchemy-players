import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Switch, Route} from 'react-router'
import PropTypes from 'prop-types'

import * as playerActions from '../actions/players'
import {clearCallout} from '../actions/callout'
import PlayerList from '../components/player/PlayersList'
import PlayerForm from '../components/player/PlayerForm'

class Players extends Component {
  componentWillMount () {
    this.props.actions.fetchPlayers()
    this.props.actions.clearError()
  }

  render () {
    const {players, actions} = this.props

    return (
      <Switch>
        <Route path='/player/create' render={(props) => <PlayerForm {...props} actions={actions} />} />
        <Route exact path='/player' render={(props) => <PlayerList {...props} actions={actions} players={players} />} />
      </Switch>
    )
  }
}

export default connect(
  state => ({ players: state.players }),
  dispatch => ({ actions: bindActionCreators({...playerActions, clearError: clearCallout}, dispatch) })
)(Players)

Players.propTypes = {
  actions: PropTypes.object.isRequired,
  players: PropTypes.array.isRequired
}
