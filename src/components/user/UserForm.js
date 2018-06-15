import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default class UserForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ [ event.target.name ]: event.target.value })
  }

  handleCreate () {
    this.props.actions.createUser(this.state)
  }

  render () {
    return (
      <form>
        <input type='text' placeholder='First Name' name='first_name' onChange={this.handleChange} />
        <input type='text' placeholder='Last Name' name='last_name' onChange={this.handleChange} />
        <input type='email' placeholder='Email Address' name='email' onChange={this.handleChange} />
        <input type='password' placeholder='Password' name='password' onChange={this.handleChange} />
        <input type='password' placeholder='Confirm Password' name='confirm_password' onChange={this.handleChange} />
        <div>
          <Link to='/' className='button secondary'>Back to Login</Link>
          <button type='button' className='button' onClick={() => this.handleCreate()}>Create User</button>
        </div>
      </form>
    )
  }
}

UserForm.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func)
}
