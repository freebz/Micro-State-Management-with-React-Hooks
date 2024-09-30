const selectAddTodo = (state: StoreState) => state.addTodo;

const NewTodo = () => {
  const addTodo = useStore(selectAddTodo);
  const [text, setText] = useState("");
  const onClick = () => {
    addTodo(text);
    setText("");
  };
  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onClick} disabled={!text}>
        Add
      </button>
    </div>
  );
};