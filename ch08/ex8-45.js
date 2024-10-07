const anotherCountAtom = atom(
  (get) => get(countAtom),
  (get, set, arg) => {
    const nextCount = typeof arg === 'function' ?
      arg(get(countAtom)) : arg
    set(countAtom, nextCount)
    console.log('set count', nextCount)
  }
);