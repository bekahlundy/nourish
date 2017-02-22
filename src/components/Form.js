import React from 'react';
import FormButton from './FormButton'

const Form = () => {
  return (
    <div>
      <input
        placeholder='Goal'
        className='input-feild'/>
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
      <button>Add</button>
    </div>
  )
}

export default Form;
