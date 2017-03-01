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

  it.skip('should return state with a new user property upon user login', ()=>{
    const defaultState = goals(undefined, {})
    const addGoal = {
      type: 'ADD_GOAL', action: {
        id: 1,
        text: 'read',
        completed: false
      }
    }
    const testState = goals(defaultState, addGoal)
    const newTitle = Object.keys(testState)
    newTitle.reduce((obj, id) => {
      console.log(id)
    }, {})
    // console.log(newTitle)
    expect(defaultState.user).to.not.exist
    expect(testState.user).to.exist
    expect(newTitle).to.equal('read')
  })
})

describe('allReducers', () => {
  it('should be a function', () => {
    assert.isFunction(rootReducer)
  })

})
