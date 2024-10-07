const doubledCountAtom = atom(
  (get) => get(countAtom) * 2
);