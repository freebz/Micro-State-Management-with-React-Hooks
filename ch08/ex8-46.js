// 액션 아톰 사용하기

const countAtom = count(0);

const incrementCountAtom = atom(
  null,
  (get, set, arg) => set(countAtom, (c) => c + 1)
);