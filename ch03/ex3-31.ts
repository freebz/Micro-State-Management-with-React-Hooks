// useReducer로 하나의 상태를 만들고 여러 개의 컨텍스트로 전파하기

type Action = { type: "INC1" } | { type: "INC2" };

const Count1Context = createContext<number>(0);
const Count2Context = createContext<number>(0);
const DispatchContext = createContext<Dispatch<Action>>(
  () => {}
);