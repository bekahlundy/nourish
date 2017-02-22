export const addGoal = (text, id) => {
  return {
    type: 'ADD_GOAL',
    text,
    id
  };
};

export const toggleButton = (id) => {
  return {
    type: 'TOGGLE_BUTTON',
    id,
  };
};
