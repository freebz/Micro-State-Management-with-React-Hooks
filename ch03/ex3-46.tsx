// 사용자 정의 훅이 있는 팩토리 패턴

const createStateContext = (
  useValue: (init) => State,
) => {
  const StateContext = createContext(null);
  const StateProvider = ({
    initialValue,
    children,
  }) => (
    <StateContext.Provider value={useValue(initialValue)}>
      {children}
    </StateContext.Provider>
  );
  const useContextState = () => {
    const value = useContext(StateContext);
    if (value === null) throw new Error("Provider missing");
    return value;
  };
  return [StateProvider, useContextState] as const;
};