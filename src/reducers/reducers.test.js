import goals from './goals-reducer'
import rootReducer from './index.js'

import { expect, assert } from 'chai';


describe('goals reducer', () => {
  it('should be a function', () => {
      assert.isFunction(goals)
  })

  it('should return an initial state of []',
  () => {
    const defaultState = goals(undefined, {})
    expect(defaultState).to.exist
  })

  it('should accept action ADD_GOAL', () => {
    const action = {
      type: 'ADD_GOAL',
      text: 'text',
      id: 0,
      completed: false
    };
    expect(goals( [action.text], '')).to.deep.equal(['text']);
    expect(goals([action.id], 0)).to.deep.equal([0]);
    expect(goals([action.completed], false)).to.deep.equal([false]);
  });

  it('should accept action TOGGLE_GOAL', () => {
    const action = {
      type: 'ADD_GOAL',
      id: 0
    };
    expect(goals([action.id], 0)).to.deep.equal([0]);
  });
})

describe('allReducers', () => {
  it('should be a function', () => {
    assert.isFunction(rootReducer)
  })

})
