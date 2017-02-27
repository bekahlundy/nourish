import React, { Component } from 'react';
import FormButton from './FormButton';

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      label: '',
      physical: 0,
      emotional: 0,
      mental: 0,
      spiritual: 0,
      total: 0
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
          handleClick={ () => this.setState({ label: 'physical', physical: this.state.physical + 1 , total: this.state.total + 1}) } />
        <FormButton
          title='Emotional'
          className='emotional-btn'
          handleClick={ () => this.setState({ label: 'emotional', emotional: this.state.emotional + 1, total: this.state.total + 1 }) }/>
        <FormButton
          title='Mental'
          className='mental-btn'
          handleClick={ () => this.setState({ label: 'mental', mental: this.state.mental + 1, total: this.state.total + 1  }) }/>
        <FormButton
          title='Spiritual'
          className='spiritual-btn'
          handleClick={ () => this.setState({ label: 'spiritual', spiritual: this.state.spiritual + 1, total: this.state.total + 1 }) }/>
      </div>
      <button
        onClick={() => {
        handleSubmit({
          text: this.state.text,
          label: this.state.label,
          physical: this.state.physical,
          emotional: this.state.emotional,
          mental: this.state.mental,
          spiritual: this.state.spiritual,
          total: this.state.total
        })
          }}>Add</button>
    </div>
  )
}
}
