const NewTodo = () => {
  const [text, setText] = useState("");
  const onClick = () => {
    createTodo(text);
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