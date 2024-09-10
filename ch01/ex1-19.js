const reducer = (prev, action) =>
  typeof action === 'function' ? action(prev) : action;

const useState = (initialState) =>
    useReducer(reducer, initialState);