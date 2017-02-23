import React, { Component } from 'react';
import FormButton from './FormButton'


export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }
  render() {
    const { handleSubmit, goals } = this.props;

  return (
    <div>
      <input
        value={this.state.text}
        placeholder='Goal'
        className='input-feild'
        onChange= {(e) => this.setState({ text: e.target.value})}
      />
      <div className='categorybutton-container'>
        <FormButton
          title='Physical'
          className='physical-btn'/>
        <FormButton
          title='Emotional'
          className='emotional-btn'/>
        <FormButton
          title='Mental'
          className='mental-btn'/>
        <FormButton
          title='Spiritual'
          className='spiritual-btn'/>
      </div>
      <button
        onClick={() => {
        handleSubmit(this.state.text)
          }}>Add</button>
    </div>
  )
}
}
