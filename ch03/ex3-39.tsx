export const Count1Provider = ({
  children
}: {
  children: ReactNode
}) => (
  <Count1Context.Provider value={useState(0)}>
    {children}
  </Count1Context.Provider>
);