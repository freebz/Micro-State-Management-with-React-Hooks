const useMyState = () => useReducer({}, (prev, action) => {
  if (action.type === 'SET_FOO') {
    return { ...prev, foo: action.foo };
  }
  // ...
});