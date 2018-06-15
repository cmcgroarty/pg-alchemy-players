import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as calloutActions from '../actions/callout'

class CalloutDisplay extends Component {
  render () {
    const {callout} = this.props
    let calloutClass = ' hide'
    let calloutHeader = ''

    if (callout.display && callout.message !== '') {
      switch (callout.type) {
        case 'success':
          calloutClass = 'success'
          calloutHeader = 'Success'
          break
        default:
          calloutClass = 'alert'
          calloutHeader = 'Error'
      }
    }
    return (
      <div className={'callout ' + calloutClass}>
        <div className='grid-container'>
          <div className='grid-x'>
            <div className='cell'>
              <h5>{calloutHeader}</h5>
              <p>{callout.message}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({ callout: state.callout }),
  dispatch => ({ actions: bindActionCreators(calloutActions, dispatch) })
)(CalloutDisplay)

CalloutDisplay.propTypes = {
  callout: PropTypes.object
}
