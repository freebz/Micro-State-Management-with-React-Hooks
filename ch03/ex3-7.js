// useContext와 함께 useState 사용하기

const CountStateContext = createContext({
  count: 0,
  setCount: () => {},
});