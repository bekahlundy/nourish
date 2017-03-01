import React from 'react';

import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Form from './Form';


describe('Form', () => {
  it('renders as a div', () => {
    const wrapper = shallow(<Form />)
    assert.equal(wrapper.type(), 'div')
  });

  it('renders an input', () => {
    const wrapper = shallow(<Form />)
    expect(wrapper.find('input')).to.have.length(1)
  })

  it('renders four formbutton components', () => {
    const wrapper = shallow(<Form />)
    expect(wrapper.find('FormButton')).to.have.length(4)
  })

  it('renders a button', () => {
    const wrapper = shallow(<Form />)
    expect(wrapper.find('button')).to.have.length(1)
  })

  it('this.state includes-', () => {
    const wrapper = shallow(<Form />)
    expect(wrapper.state().text).to.deep.equal('')
    expect(wrapper.state().label).to.deep.equal('')
    expect(wrapper.state().physical).to.deep.equal(0)
    expect(wrapper.state().emotional).to.deep.equal(0)
    expect(wrapper.state().mental).to.deep.equal(0)
    expect(wrapper.state().spiritual).to.deep.equal(0)
    expect(wrapper.state().total).to.deep.equal(0)
  })
});
