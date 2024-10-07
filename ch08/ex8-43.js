// 아톰의 write 함수 정의하기

const countAtom = atom(0);

const doubledCountAtom = atom(
  (get) => get(countAtom) * 2
);