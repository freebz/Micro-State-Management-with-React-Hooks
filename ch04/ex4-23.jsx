const selectCount2 = (
  state: ReturnType<typeof store.getState>
) => state.count2;

const Component2 = () => {
  const state = useStoreSelector(store, selectCount2);

  const inc = () => {
    store.setState((prev) => ({
      ...prev,
      count2: prev.count2 + 1,
    }));
  };

  return (
    <div>
      count2: {state} <button onClick={inc}>+1</button>
    </div>
  );
};