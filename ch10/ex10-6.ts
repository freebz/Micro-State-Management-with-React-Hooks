const StateContext = createContext<
  ReturnType<typeof useValue> | null
>(null);