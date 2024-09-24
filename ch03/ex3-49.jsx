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