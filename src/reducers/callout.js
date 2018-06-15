import * as types from '../constants/CalloutActionTypes'

const initialState = {display: false, message: ''}

export default function callout (state = initialState, action) {
  switch (action.type) {
    case types.SET_CALLOUT:
      return {display: true, message: action.callout ? action.callout.message : 'An Unknown Error has Occurred', type: action.callout.type}
    case types.CLEAR_CALLOUT:
      return {display: false, message: ''}
    default:
      return state
  }
}
