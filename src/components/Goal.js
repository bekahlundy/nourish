import React from 'react'

const Goal = ({ handleClick, completed, text }) => {
  return (
    <p
      className={text.label}
      onClick={ handleClick }
      style={
      { textDecoration: completed ? 'line-through' : 'none' }
    }>
      { text.text }
    </p>
  )
}

export default Goal;
