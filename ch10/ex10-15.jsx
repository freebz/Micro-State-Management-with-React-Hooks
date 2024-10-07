const TextBox = () => {
  const [state, setState] = useTracked();
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