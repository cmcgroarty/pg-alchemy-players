import error from './callout'
import * as types from '../constants/CalloutActionTypes'

describe('callout reducer', () => {
  it('should handle initial state', () => {
    expect(error(undefined, {})).toEqual({ display: false, message: '' })
  })
  it('should handle SET_CALLOUT', () => {
    expect(error({}, {
      type: types.SET_CALLOUT,
      callout: { status_code: 403, message: 'Access denied', code: 'Forbidden' }
    })).toEqual({ display: true, message: 'Access denied' })
  })
  it('should handle CLEAR_CALLOUT', () => {
    expect(error({
      display: true,
      message: 'Access denied'
    }, { type: types.CLEAR_CALLOUT })).toEqual({ display: false, message: '' })
  })
})
