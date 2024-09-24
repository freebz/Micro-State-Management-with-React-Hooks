const Count2Context = createContext<
  CountContextType | null
>(null);

export const Count2Provider = ({
  children
}: {
  children: ReactNode
}) => (
  <Count2Context.Provider value={useState(0)}>
    {children}
  </Count2Context.Provider>
);

export const useCount2 = () => {
  const value = useContext(Count2Context);
  if (value === null) throw new Error("Provider missing");
  return value;
};