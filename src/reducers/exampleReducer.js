const exampleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_STUFF':
      return action.data
    default:
      return state
  }
}

export default exampleReducer;
