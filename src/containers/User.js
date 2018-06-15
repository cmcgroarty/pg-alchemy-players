import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Route, Switch } from 'react-router'
import { connect } from 'react-redux'

import * as userActions from '../actions/users'
import {clearCallout} from '../actions/callout'
import UserForm from '../components/user/UserForm'
import PropTypes from 'prop-types';

class User extends Component {
  componentWillMount () {
    this.props.actions.clearError()
  }
  render () {
    const {actions} = this.props
    return (
      <Switch>
        <Route path='/user/create' render={(props) => <UserForm {...props} actions={actions} />} />
      </Switch>
    )
  }
}

export default connect(
  state => ({ users: state.users}),
  dispatch => ({ actions: bindActionCreators({...userActions, clearError: clearCallout}, dispatch) })
)(User)

User.propTypes = {
  actions: PropTypes.object.isRequired
}
