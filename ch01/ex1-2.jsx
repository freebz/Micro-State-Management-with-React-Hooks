const useCount = () => {
  const [count, setCount] = useState(0);
  return [count, setCount];
};

const Component = () => {
  const [count, setCount] = useCount();

  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>
        +1
      </button>
    </div>
  );
};