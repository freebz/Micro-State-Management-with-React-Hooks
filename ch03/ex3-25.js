const Counter2 = () => {
  const [count2, setCount2] = useContext(Count2Context);
  return (
    <div>
      Count2: {count2}
      <button onClick={() => setCount2((c) => c + 1)}>
        +1
      </button>
    </div>
  );
};