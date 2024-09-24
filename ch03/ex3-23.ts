// 전역 상태를 위한 컨텍스트 만들기

// 작은 상태 조각 만들기

type CountContextType = [
  number,
  Dispatch<SetStateAction<number>>
];

const Count1Context = createContext<CountContextType>([
  0,
  () => {}
]);

const Count2Context = createContext<CountContextType>([
  0,
  () => {}
]);