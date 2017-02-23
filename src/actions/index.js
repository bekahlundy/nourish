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
    id
  };
};

export const toggleWellness = (title) => {
  return {
    type: 'TOGGLE_WELLNESS',
    title
  };
};
