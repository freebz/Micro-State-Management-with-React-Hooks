const TextBox = () => {
  const [state, setState] = useStateContext();
  const setText = (text: string) => {
    setState((prev) => ({ ...prev, text }));
  };

  return (
    <div>
      <input
        value={state.text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};