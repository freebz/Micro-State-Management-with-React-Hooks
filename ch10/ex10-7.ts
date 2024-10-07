const Provider = ({ children }: { children: ReactNode }) => (
  <StateContext.Provider value={useValue()}>
    {children}
  </StateContext.Provider>
);