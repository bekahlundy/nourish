import React from 'react'
import Goal from './Goal'

const GoalList = ({ goals, onGoalClick }) => {
  if (goals.length === 0) {
  return <h3>You have nothing to do!</h3>
}

return(
  <ul>
  { goals.map(goal => {
    return (
      <Goal
        key={goal.id}
        {...goal}
        handleClick={() => onGoalClick(goal.id)}
      />
    )
  }) }
  </ul>
)
}

export default GoalList
