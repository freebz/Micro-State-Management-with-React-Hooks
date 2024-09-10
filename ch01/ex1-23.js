// 인라인 리듀서 사용하기

const useScore = (bonus) =>
  useReducer((prev, delta) => prev + delta + bonus, 0);