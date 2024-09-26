const createContainer = () => {
  let state = { a: 1, b: 2 };
  const getState = () => state;
  const setState = (...) => { ... };
  return { getState, setState };
};

const globalVariable = createContainer();
globalVariable.setState(...);