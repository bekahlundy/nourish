import React from 'react'
import Goal from './Goal'
import ProgressBar from './ProgressBar'

const GoalList = ({ goals, onGoalClick }) => {
  if (goals.length === 0) {
  return (
    <div className='goallist-container'>
       <h3>Add Items!</h3>
       <ProgressBar />
    </div>
  )
}

return(
  <div className='goallist-container'>
    <p>
    { goals.map(goal => {
      return (
        <Goal
          key={goal.id}
          {...goal}
          handleClick={() => onGoalClick(goal.id)}
        />
      )
    }) }
    <ProgressBar />
  </p>
</div>
)
}

export default GoalList
