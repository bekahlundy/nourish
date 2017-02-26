import React, { Component } from 'react';
import FormButton from './FormButton';


export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      label: ''
    }
  }

  render() {
    const { handleSubmit, goals, handleToggle } = this.props;
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
          className='physical-btn'
          handleClick={ () => this.setState({ label: 'physical' }) } />
        <FormButton
          title='Emotional'
          className='emotional-btn'
          handleClick={ () => this.setState({ label: 'emotional' }) }/>
        <FormButton
          title='Mental'
          className='mental-btn'
          handleClick={ () => this.setState({ label: 'mental' }) }/>
        <FormButton
          title='Spiritual'
          className='spiritual-btn'
          handleClick={ () => this.setState({ label: 'spiritual' }) }/>
      </div>
      <button
        onClick={() => {
        handleSubmit({ text: this.state.text, label: this.state.label })
          }}>Add</button>
    </div>
  )
}
}
