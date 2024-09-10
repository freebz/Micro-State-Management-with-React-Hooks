const Component = () => {
  const [state, setState] = useState({ count: 0 });

  return (
    <div>
      {state.count}
      <button
        onClick={() => { state.count = 1; setState(state); }}
      >
        Set Count to 1
      </button>
    </div>
  );
};