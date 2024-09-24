const Counter2 = () => {
  const [count2, setCount2] = useCount2();
  return (
    <div>
      Count2: {count2}
      <button onClick={() => setCount2((c) => c + 1)}>
        +1
      </button>
    </div>
  );
};