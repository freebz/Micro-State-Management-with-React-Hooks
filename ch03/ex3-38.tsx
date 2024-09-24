// 컨텍스트 사용을 위한 모범 사례

// 사용자 정의 훅과 공급자 컴포넌트 만들기

type CountContextType = [
  number,
  Dispatch<SetStateAction<number>>
];

const Count1Context = createContext<
  CountContextType | null
>(null);