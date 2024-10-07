const TextBox = () => {
  const [state, dispatch] = useTracked();
  const setText = (text: string) => {
    dispatch({ type: "SET_TEXT", text });
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