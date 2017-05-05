// ./src/actions/bookActions.js
export const increment = () => {
  // Return action
  return {
    // Unique identifier
    type: 'INCREMENT'
  }
};

export const incrementIfOdd = () => {
  // Return action
  return {
    // Unique identifier
    type: 'INCREMENT_IF_ODD'
  }
};