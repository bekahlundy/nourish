import React from 'react';

import { expect, assert } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Form from './Form';
import FormButton from './FormButton';


describe('Form', () => {
  it('renders as a div', () => {
    const wrapper = shallow(<FormButton />)
    assert.equal(wrapper.type(), 'div')
  });

  it('should have a className of formbutton-div', () => {
    const wrapper = shallow(<FormButton />)
    expect(wrapper.find('.formbutton-div')).to.have.length(1)
  })

  it('renders as a div', () => {
    const wrapper = shallow(<FormButton />)
    assert.equal(wrapper.type(), 'div')
  });

  it('renders a button', () => {
    const wrapper = shallow(<FormButton />)
    expect(wrapper.find('button')).to.have.length(1)
  })

  it("should have all these props", () => {
    const wrapper = mount(<FormButton title='physical' className='physical-btn' />);
    expect(wrapper.prop('title')).to.equal('physical');
    expect(wrapper.prop('className')).to.equal('physical-btn');
  })

  it.skip("should have handleClick props", () => {
    const wrapper = mount(<FormButton onClick=''/>);
    expect(wrapper.prop('handleClick')).to.equal({});
  })

  it('simulates click events', () => {
    const handleClick = sinon.spy();
    const wrapper = shallow(
      <FormButton handleClick={handleClick} />
    );
    wrapper.find('button').simulate('click');
    expect(handleClick).to.have.property('callCount', 1);
  });
});
