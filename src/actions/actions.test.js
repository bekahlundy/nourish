import * as actions from './index.js'

describe('actions', () => {
  it('should create an action to add a goal', () => {
    const text = 'Stretch'
    const label = 'physical'
    const physical = '0'
    const emotional = 0
    const mental = 0
    const spiritual = 0
    const total = 0
    const expectedAction = {
      type: 'ADD_GOAL',
      text,
      label,
      physical,
      emotional,
      mental,
      spiritual,
      total
    }
    expect(actions.addGoal(text, label, physical, emotional, mental, spiritual, total)).toEqual(expectedAction)
  })
  it('should create an action to toggle goal', () => {
    const id = 1
    const expectedAction = {
      type: 'TOGGLE_GOAL',
      id
    }
    expect(actions.toggleGoal(id)).toEqual(expectedAction)
  })
})
