export const Type = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  CHANGE_STEP: 'CHANGE_STEP',
};

export const increment = value => ({
  type: Type.INCREMENT,
  payload: value,
});

export const decrement = value => ({
  type: Type.DECREMENT,
  payload: value,
});

export const changeStep = step => ({
  type: Type.CHANGE_STEP,
  payload: step,
});
