const Counter1 = () => {
  const [count1, setCount1] = useCount1();
  return (
    <div>
      Count1: {count1}
      <button onClick={() => setCount1((c) => c + 1)}>
        +1
      </button>
    </div>
  );
};