// 모듈 상태의 한계

const createStore = (initialState) => {
  let state = initialState;

  const callbacks = new Set();
  const getState = () => state;
  const setState = (nextState) => {
    state = typeof nextState === 'function'
      ? nextState(state) : nextState;
    callbacks.forEach((callback) => callback());
  };
  const subscribe = (callback) => {
    callbacks.add(callback);
    return () => { callbacks.delete(callback); };
  };

  return { getState, setState, subscribe };
};