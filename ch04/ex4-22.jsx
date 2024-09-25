const Component1 = () => {
  const state = useStoreSelector(
    store,
    useCallback((state) => state.count1, []),
  );

  const inc = () => {
    store.setState((prev) => ({
      ...prev,
      count1: prev.count1 + 1,
    }));
  };

  return (
    <div>
      count1: {state} <button onClick={inc}>+1</button>
    </div>
  );
};