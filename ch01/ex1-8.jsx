const Component = () => {
  const [state, setState] = useState({ count: 0 });

  return (
    <div>
      {state.count}
      <button onClick={() => setState({ count: 1 })}>
        Set Count to 1
      </button>
    </div>
  );
};