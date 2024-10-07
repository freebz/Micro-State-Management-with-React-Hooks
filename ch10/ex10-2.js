const NameProvider = ({ children }) => (
  <NameContext.Provider
    value={
      useState({ firstName: 'react', lastName: 'hooks' })
    }
  >
    {children}
  </NameContext.Provider>
);