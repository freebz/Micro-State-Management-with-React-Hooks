const useStateContext = () => {
  const contextValue = useContext(StateContext);
  if (contextValue === null) {
    throw new Error("Please use Provider")
  }

  return contextValue;
};