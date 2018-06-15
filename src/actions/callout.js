import * as types from '../constants/CalloutActionTypes'

export const setCallout = callout => ({type: types.SET_CALLOUT, callout: callout})
export const clearCallout = () => ({type: types.CLEAR_CALLOUT})
