const TextBox = ({ showCount }: { showCount: boolean }) => {
  const dispatch = useDispatch();
  const state = useTrackedState();
  const setText = (text: string) => {
    dispatch({ type: "SET_TEXT", text });
  };

  return (
    <div>
      <input
        value={state.text}
        onChange={(e) => setText(e.target.value)}
      />
      {showCount && <span>{state.count}</span>}
    </div>
  );
};