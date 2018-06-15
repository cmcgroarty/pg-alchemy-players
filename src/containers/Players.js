import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'
import PropTypes from 'prop-types'

import * as playerActions from '../actions/players'
import PlayerList from '../components/player/PlayersList'
import PlayerForm from '../components/player/PlayerForm'
import { clearCallout } from '../actions/callout'

class Players extends Component {
  render () {
    const {actions} = this.props

    return (
      <Switch>
        <Route path='/player/create' render={(props) => <PlayerForm {...props} actions={actions} />} />
        <Route exact path='/player' render={(props) => <PlayerList {...props} actions={actions} />} />
      </Switch>
    )
  }
}

export default connect(
  state => {},
  dispatch => ({ actions: bindActionCreators({...playerActions, clearError: clearCallout}, dispatch) })
)(Players)

Players.propTypes = {
  actions: PropTypes.object.isRequired
}
