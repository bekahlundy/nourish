import mapDispatchToProps from './Form'
import mapStateToProps from './GoalListContainer'

import { expect, assert } from 'chai';

describe('Form Container', function () {
  it('should be a function', () => {
    assert.isFunction(mapDispatchToProps)
  })


//   it.skip('mapStateToProps should update state in App',() => {
//     const buttonText = defaultWrapper.find('.signIn').text()
//     expect(buttonText).to.equal(' Sign In ')
// // how do we map state to props on the mounted component?  this is not how...
//     defaultWrapper.mapStateToProps(fakeStore)
//     expect(buttonText).to.not.exist
//   })
})

describe('Goal List Container', function () {
  it('should be a function', () => {
    assert.isFunction(mapStateToProps)
  })
})
