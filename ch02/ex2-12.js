// 전역 상태 사용하기

// 전역 상태란?

const createContainer = () => {
  let base = 1;
  const addBase = (n) => n + base;
  const changeBase = (b) => { base = b; };
  return { addBase, changeBase };
};

const container1 = createContainer();
const container2 = createContainer();

container1.changeBase(10);

console.log(container1.addBase(2)); // "12"가 출력된다
console.log(container2.addBase(2)); // "3"이 출력된다