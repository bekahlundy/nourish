import React from 'react'

const Goal = ({ handleClick, completed, text }) => {
  return (
    <li
      onClick={ handleClick }
      style={
      { textDecoration: completed ? 'line-through' : 'none' }
    }>
      { text }
    </li>
  )
}

export default Goal;
