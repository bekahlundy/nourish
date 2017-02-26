import React from 'react'

const Goal = ({ handleClick, completed, text }) => {
  return (
    <li
      className={text.label}
      onClick={ handleClick }
      style={
      { textDecoration: completed ? 'line-through' : 'none' }
    }>
      { text.text }
    </li>
  )
}

export default Goal;
