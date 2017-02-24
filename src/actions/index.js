export const addGoal = (text, label) => {
  return {
    type: 'ADD_GOAL',
    text,
    label
  };
};

export const toggleGoal = (id) => {
  return {
    type: 'TOGGLE_GOAL',
    id
  };
};
