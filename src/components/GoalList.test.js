import React from 'react';

import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import GoalList from './GoalList';
import ProgressBar from './ProgressBar';


describe('GoalList', () => {
  it.skip('renders as a div', () => {
    const wrapper = shallow(<GoalList />)
    assert.equal(wrapper.type(), 'div')
  });

  it.skip('renders an h3', () => {
    const wrapper = shallow(<GoalList />)
    expect(wrapper.find('h3')).to.have.length(1)
  })

  it.skip('renders an ul', () => {
    const wrapper = shallow(<GoalList />)
    expect(wrapper.find('ul')).to.have.length(1)
  })

  it.skip('renders two ProgressBar components', () => {
    const wrapper = shallow(<GoalList />)
    expect(wrapper.find('ProgressBar')).to.have.length(2)
  })

  it.skip('renders a Goal components', () => {
    const wrapper = shallow(<GoalList />)
    expect(wrapper.find('Goal')).to.have.length(1)
  })

});
