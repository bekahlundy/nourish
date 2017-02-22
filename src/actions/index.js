export const addGoal = (text, id) => {
  return {
    type: 'ADD_GOAL',
    text,
    id
  };
};

export const toggleGoal = (id) => {
  return {
    type: 'TOGGLE_GOAL',
    id,
  };
};
