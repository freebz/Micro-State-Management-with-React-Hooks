const Count2Provider = ({
  children
}: {
  children: ReactNode
}) => {
  const [count2, setCount2] = useState(0);
  return (
    <Count2Context.Provider value={[count2, setCount2]}>
      {children}
    </Count2Context.Provider>
  );
};