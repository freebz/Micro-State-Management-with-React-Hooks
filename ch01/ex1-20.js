// useState를 이용한 useReducer 구현

const useReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);
  const dispatch = (action) =>
    setState(prev => reducer(prev, action));
  return [state, dispatch];
}