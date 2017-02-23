const toggleWellness = (state='NONE', action) => {
  switch (action.type) {
    case 'TOGGLE_WELLNESS':
      return action.toggleWellness
    default:
      return state
  }
}

export default toggleWellness
