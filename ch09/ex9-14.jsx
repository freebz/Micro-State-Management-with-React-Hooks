const Counter2 = () => {
  const snap = useSnapshot(state);
  const inc = () => ++state.count2;
  return (
    <>
      {snap.count2} <button onClick={inc}>+1</button>
    </>
  );
};