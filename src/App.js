import React, { Component } from 'react'
import { Route, Switch } from 'react-router'

import './App.css'
import Login from './containers/Login'
import Players from './containers/Players'
import User from './containers/User'
import CalloutDisplay from './components/CalloutDisplay'

class App extends Component {
  render () {
    return (
      <div>
        <div className='top-bar'>
          <div className='grid-container'>
            <div className='grid-x'>
              <div className='top-bar-left'>
                <ul className='dropdown menu' data-dropdown-menu>
                  <li className='menu-text'>P&G Alchemy Players API</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <CalloutDisplay />
        <div className='grid-container'>
          <div className='grid-x grid-padding-x grid-padding-y'>
            <div className='cell'>
              <Switch>
                <Route path='/user' component={User} />
                <Route path='/player' component={Players} />
                <Route path='/' component={Login} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
