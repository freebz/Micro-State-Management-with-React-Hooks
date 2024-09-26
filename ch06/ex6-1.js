// 전역 상태 관리 문제 해결하기

let globalVariable = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
  e: [4, 5, 6],
};

globalVariable.b.d = 9;