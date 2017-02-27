import React from 'react';


const Goal = ({ handleClick, completed, text }) => {
  return (
    <label className={text.label}>
      <input
        onClick={ handleClick }
        type='checkbox'
        className='check-box'
       /><p className='indv-goal' style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text.text}</p>
  </label>
  )
}

export default Goal;
