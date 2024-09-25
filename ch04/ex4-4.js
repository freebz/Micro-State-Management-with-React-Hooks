export const setState = (nextState) => {
  state = typeof nextState === 'function'
    ? nextState(state) : nextState;
};