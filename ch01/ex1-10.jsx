const Component = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>
        Set Count to {count + 1}
      </button>
    </div>
  );
};