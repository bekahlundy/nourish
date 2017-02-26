const goals = (state=[], action) => {
  switch (action.type) {
    case 'ADD_GOAL':
      return [...state,
              { id: Date.now(),
               text: action.text,
               completed: false }
            ];
    case 'TOGGLE_GOAL':
      return state.map(goal => {
        if (goal.id !== action.id) {
          return goal;
        }
        return Object.assign({}, goal, {completed: !goal.completed})
      })
    default:
      return state;
  }
}

export default goals;
