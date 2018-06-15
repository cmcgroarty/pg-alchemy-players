import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class LoginPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  static propTypes = {
    attemptLogin: PropTypes.func.isRequired
  }

  handleLogin () {
    this.props.attemptLogin(this.state)
  }

  handleChange (event) {
    this.setState({ [ event.target.name ]: event.target.value })
  }

  render () {
    const { auth } = this.props
    let goToPlayers = ''
    if(auth.token) {
      goToPlayers = <Link to='/player' className='button secondary'>Manage Players</Link>
    }
    return (
      <form>
          <input type='email' placeholder='Email' name='email' onChange={this.handleChange} />

          <input type='password' placeholder='Password' name='password' onChange={this.handleChange} />

          <button type='button' className='button' onClick={() => this.handleLogin()}>Login</button>
          <Link to='/user/create' className='button secondary'>Create a User</Link>
          {goToPlayers}
      </form>
    )
  }
}

export default LoginPage
