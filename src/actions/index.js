export const addGoal = (text, label, physical, emotional, mental, spiritual, total) => {
  return {
    type: 'ADD_GOAL',
    text,
    label,
    physical,
    emotional,
    mental,
    spiritual,
    total
  };
};

export const toggleGoal = (id) => {
  return {
    type: 'TOGGLE_GOAL',
    id
  };
};
