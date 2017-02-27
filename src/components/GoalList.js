import React from 'react'
import Goal from './Goal'
import ProgressBar from './ProgressBar'

const GoalList = ({ goals, onGoalClick }) => {
  if (goals.length === 0) {
  return (
    <div className='goallist-container'>
       <h3>Add Items!</h3>
       <ProgressBar width={500} height={50} physicalNum={0} emotionalNum={10} mentalNum={30} spiritualNum={40} total={100}/>
    </div>
  )
}
 console.log('physical', goals)
return(
  <div className='goallist-container'>
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
    {goals.map(goal => {
      return (
        <ProgressBar width={300} height={50} physicalNum={goal.text.physical} emotionalNum={goal.text.emotional} mentalNum={goal.text.mental} spiritualNum={goal.text.spiritual} total={goal.text.total}/>
      ) })}
  </ul>
</div>
)
}

export default GoalList
