const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useTrackedState();
  const inc = () => dispatch({ type: "INC" });

  return (
    <div>
      count: {count} <button onClick={inc}>+1</button>
    </div>
  );
};