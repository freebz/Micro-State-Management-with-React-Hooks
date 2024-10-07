const Counter1 = () => {
  const [count, setCount] = useContext(CountContext);
  const inc = () => setCount((c) => c + 1);
  return <>{count} <button onClick={inc}>+1</button></>;
};

const Counter2 = () => {
  const [count, setCount] = useContext(CountContext);
  const inc = () => setCount((c) => c + 1);
  return <>{count} <button onClick={inc}>+1</button></>;
};