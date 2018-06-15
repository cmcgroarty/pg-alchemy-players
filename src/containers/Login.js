import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as authActions from '../actions/auth'
import {clearCallout} from '../actions/callout'
import LoginPage from '../components/LoginPage'

class Login extends Component {
  componentWillMount () {
    this.props.actions.clearError()
  }
  render () {
    const {actions, auth} = this.props
    return (
      <LoginPage {...actions} auth={auth} />
    )
  }
}

export default connect(
  state => ({ auth: state.auth }),
  dispatch => ({ actions: bindActionCreators({...authActions, clearError: clearCallout}, dispatch) })
)(Login)
