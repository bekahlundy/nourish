import React from 'react'

const Goal = ({ handleClick, completed, text }) => {
  return (
    <p
      onClick={ handleClick }
      style={
      { textDecoration: completed ? 'line-through' : 'none' }
    }>
      { text }
    </p>
  )
}

export default Goal;
