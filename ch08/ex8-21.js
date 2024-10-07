const totalAtom = atom(
  (get) => get(count1Atom) + get(count2Atom)
);