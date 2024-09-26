const Counter2 = () => {
  const [state, setState] = useStore(store2);
  const inc = () => {
    setState((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };

  return (
    <div>
      {state.count} <button onClick={inc}>+1</button>
    </div>
  );
};

const Component2 = () => (
  <>
    <Counter2 />
    <Counter2 />
  </>
);