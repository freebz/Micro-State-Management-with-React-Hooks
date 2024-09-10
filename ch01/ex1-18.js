// useState와 useReducer의 유사점과 차이점

// useReducer를 이용한 useState 구현

const useState = (initialState) => {
  const [state, dispatch] = useReducer(
    (prev, action) =>
      typeof action === 'function' ? action(prev) : action, initialState
  );
  return [state, dispatch];
};