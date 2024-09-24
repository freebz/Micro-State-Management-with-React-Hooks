const Component1 = ({ count, setCount }) => (
  <div>
    {count}
    <button onClick={() => setCount((c) => c + 1)}>
      +1
    </button>
  </div>
);

const Component2 = ({ count, setCount }) => (
  <div>
    {count}
    <button onClick={() => setCount((c) => c + 2)}>
      +2
    </button>
  </div>
);
