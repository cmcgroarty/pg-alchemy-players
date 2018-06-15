import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class PlayerForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      first_name: '',
      last_name: '',
      rating: '',
      handedness: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount () {
    this.props.actions.clearError()
  }

  handleChange (event) {
    this.setState({ [ event.target.name ]: event.target.value })
  }

  handleCreate () {
    this.props.actions.createPlayer(this.state)
  }

  render () {
    return (
      <form>
        <input type='text' placeholder='First Name' name='first_name' onChange={this.handleChange} />
        <input type='text' placeholder='Last Name' name='last_name' onChange={this.handleChange} />
        <input type='number' placeholder='Rating' name='rating' onChange={this.handleChange} />
        <select name='handedness' onChange={this.handleChange} defaultValue='handedness'>
          <option value='handedness' disabled>Handedness</option>
          <option value='left'>Lefty</option>
          <option value='right'>Righty</option>
        </select>
        <div>
          <Link to='/player' className='button secondary'>Back to List</Link>
          <button type='button' className='button' onClick={() => this.handleCreate()}>Create Player</button>
        </div>
      </form>
    )
  }
}

PlayerForm.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired
}
