// ./src/reducers/bookReducers.js
export default (state = [], action) => {
  switch (action.type){
    // Check if action dispatched is
    // CREATE_BOOK and act on that
    case 'INCREMENT':
        return [
            ...state,
            "one"
        ];
    case 'INCREMENT_BY_TWO':
        return [
            ...state,
            "two"
        ];
    default:
        return state;
  }
};