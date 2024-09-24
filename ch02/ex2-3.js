const createContainer = () => {
  let base = 1;
  const addBase = (n) + base;
  const changeBase = (b) => { base = b; };
  return { addBase, changeBase };
};

const { addBase, changeBase } = createContainer();