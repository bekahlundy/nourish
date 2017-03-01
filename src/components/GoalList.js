import React, { Component } from 'react'
import Goal from './Goal'
import ProgressBar from './ProgressBar'

const GoalList = ({ onGoalClick, goals }) => {
    if (goals.length === 0) {
      return (
        <div className='goallist-container'>
          <h3>Add Items!</h3>
          <ProgressBar
            width={300}
            height={50}
            physicalNum={1}
            emotionalNum={0}
            mentalNum={0}
            spiritualNum={0}
            total={8}/>
        </div>
      )
    }
    console.log('total', goals[goals.length-1].text.total)
    return(
      <div className='goallist-container'>
        <ul className='parent'>
          { goals.map(goal => {
            return (
              <Goal
                key={goal.id}
                {...goal}
                handleClick={() => onGoalClick(goal.id)}
              />
            )
          })}
          <ProgressBar
            width={300}
            height={50} physicalNum={goals[goals.length-1].text.physical}
            emotionalNum={goals[goals.length-1].text.emotional} mentalNum={goals[goals.length-1].text.mental}
            spiritualNum={goals[goals.length-1].text.spiritual}
            total={goals[goals.length-1].text.total}/>
        </ul>
      </div>
    )
  }

  export default GoalList;
