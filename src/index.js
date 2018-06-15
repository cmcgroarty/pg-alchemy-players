import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App'
import reducer from './reducers'

const store = createStore(
  reducer,
  applyMiddleware(
    ReduxThunk,
    logger
  )
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
